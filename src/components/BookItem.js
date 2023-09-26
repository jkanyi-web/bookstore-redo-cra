import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeSelectedBook } from '../redux/books/booksSlice';

export default function Book({
  id, title, author, category,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="book-list">
        <ul>
          <li className="book-item">
            <p className="book-title">{title}</p>
            <p className="book-author">{author}</p>
            <p className="book-category">{category}</p>
            <button
              type="button"
              className="button key remove-button"
              onClick={() => dispatch(removeSelectedBook(id))}
            >
              Remove
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
