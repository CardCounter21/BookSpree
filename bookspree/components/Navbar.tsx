'use client';

import React, { useState } from 'react';
import { AddBookButton } from './AddBookButton';
import Modal from './Modal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from '@/lib/axios';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [quantity, setQuantity] = useState('');
  const [coverUrl, setCoverUrl] = useState('');

  const addBook = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newBook = {
        title,
        author,
        quantity: parseInt(quantity, 10),
        cover: coverUrl,
      };
      const response = await axios.post('/api/admin/books', newBook);
      console.log('Book added:', response.data);
      setTitle('');
      setAuthor('');
      setQuantity('');
      setCoverUrl('');
      setIsOpen(false);
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <nav className="flex w-full h-[4rem] items-center justify-between px-4 bg-blue-500">
      <div className="text-white text-lg font-bold">
        <p>BookSpree</p>
      </div>
      <div>
        <AddBookButton onClick={() => setIsOpen(true)} />
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="sm:max-w-[425px]">
            <div className="mb-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Add Book</h3>
              <p className="text-sm text-gray-500">
                Make changes to your inventory here. Click save when you are done.
              </p>
            </div>
            <form onSubmit={addBook} className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="author" className="text-right">
                  Author
                </Label>
                <Input
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="quantity" className="text-right">
                  Quantity
                </Label>
                <Input
                  id="quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="coverUrl" className="text-right">
                  Cover Url
                </Label>
                <Input
                  id="coverUrl"
                  value={coverUrl}
                  onChange={(e) => setCoverUrl(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="mt-4">
                <Button type="submit">Save changes</Button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </nav>
  );
};

export default Nav;
