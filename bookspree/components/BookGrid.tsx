'use client';

import { useEffect, useState } from 'react';
import axios from '@/lib/axios';
import BookCard from './BookCard';

interface Book {
  id: string;
  cover: string;
  title: string;
  author: string;
  quantity: number;
}

const BookGrid = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get('/books');
        setBooks(res.data);
      } catch (err) {
        setError('Error fetching books');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const removeBook = async (id: string) => {
    try {
      await axios.delete(`/admin/books`, { params: { id } });
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    } catch (error) {
      console.error('Error removing book:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book) => (
        <BookCard key={book.id} {...book} onRemove={removeBook} />
      ))}
    </div>
  );
};

export default BookGrid;
