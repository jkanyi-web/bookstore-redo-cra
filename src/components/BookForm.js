/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewBook } from '../redux/books/booksSlice';

export default function BookForm() {
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newCategory, setNewCategory] = useState('');

  const handleAddBook = (event) => {
    event.preventDefault();

    dispatch(
      addNewBook({
        id: uuidv4(),
        title: newTitle,
        author: newAuthor,
        category: newCategory,
      }),
    );

    setNewTitle('');
    setNewAuthor('');
    setNewCategory('');
  };

  return (
    <div className="book-form-container">
      <h2 className="book-form-title">Add a New Book</h2>
      <form className="book-form">
        <div className="book-form-input-group">
          <div>
            <label htmlFor="title" className="book-form-label">
              Title
            </label>
          </div>
          <br />
          <input
            type="text"
            required
            id="title"
            name="title"
            placeholder="Enter the book title"
            className="book-form-input"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </div>
        <div className="book-form-input-group">
          <div>
            <label htmlFor="author" className="book-form-label">
              Author
            </label>
          </div>
          <br />
          <input
            type="text"
            required
            id="author"
            name="author"
            placeholder="Enter the book author"
            className="book-form-input"
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
          />
        </div>
        <div className="book-form-input-group">
          <div>
            <label htmlFor="category" className="book-form-label">
              Category
            </label>
          </div>
          <br />
          <input
            type="text"
            required
            id="category"
            name="category"
            placeholder="Enter the book category"
            className="book-form-input"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
        </div>
        <div className="book-form-button-group">
          <button
            type="submit"
            className="book-form-button"
            onClick={handleAddBook}
          >
            Add Book
          </button>
          <button
            type="button"
            className="book-form-button"
            onClick={() => {
              setNewTitle('');
              setNewAuthor('');
              setNewCategory('');
            }}
          >
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
}
