import React from 'react';

interface AddBookButtonProps {
  onClick: () => void;
}

export const AddBookButton: React.FC<AddBookButtonProps> = ({ onClick }) => (
  <button onClick={onClick} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
    Add Book
  </button>
);
