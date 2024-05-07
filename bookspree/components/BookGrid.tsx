'use client'

import { useState } from 'react';
import BookCard from './BookCard';

interface Book {
  id: string;
  cover: string;
  title: string;
  author: string;
  quantity: number;
}

const initialBooks: Book[] = [
  { id: '1', cover: '/cover1.jpg', title: 'Book 1', author: 'Author 1', quantity: 10 },
  { id: '2', cover: '/cover2.jpg', title: 'Book 2', author: 'Author 2', quantity: 8 },
  { id: '3', cover: '/cover3.jpg', title: 'Book 3', author: 'Author 3', quantity: 5 },
  { id: '4', cover: '/cover4.jpg', title: 'Book 4', author: 'Author 4', quantity: 12 },
  { id: '5', cover: '/cover5.jpg', title: 'Book 5', author: 'Author 5', quantity: 6 },
  { id: '6', cover: '/cover6.jpg', title: 'Book 6', author: 'Author 6', quantity: 7 },
  { id: '7', cover: '/cover7.jpg', title: 'Book 7', author: 'Author 7', quantity: 3 },
  { id: '8', cover: '/cover8.jpg', title: 'Book 8', author: 'Author 8', quantity: 11 },
  { id: '9', cover: '/cover9.jpg', title: 'Book 9', author: 'Author 9', quantity: 4 },
  { id: '10', cover: '/cover10.jpg', title: 'Book 10', author: 'Author 10', quantity: 9 }
];

const BookGrid = () => {
  const [books, setBooks] = useState(initialBooks);

  const removeBook = (id: string) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book) => (
        <BookCard key={book.id} {...book} onRemove={removeBook} />
      ))}
    </div>
  );
};

export default BookGrid;
