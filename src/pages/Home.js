/** @format */

import { useState } from 'react';

import List from '../components/List';
import Form from '../components/Form';

function HomePage() {
  const [books, setBooks] = useState([
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
    },
    {
      title: '1984',
      author: 'George Orwell',
    },
    {
      title: '"The Great Gatsby',
      author: 'F. Scott Fitzgerald',
    },
  ]);

  const handleAddBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, { id: Math.random(), ...book }]);
  };

  const handleDeleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <>
      <h1>My Book Collection</h1>
      <List books={books} deleteBook={handleDeleteBook} />
      <Form addBook={handleAddBook} />
    </>
  );
}

export default HomePage;
