import { createSlice } from '@reduxjs/toolkit';

const initialBooks = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const initialState = {
  bookList: initialBooks,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addNewBook: (state, { payload }) => {
      state.bookList.push(payload);
    },
    removeSelectedBook: (state, { payload }) => {
      state.bookList = state.bookList.filter(
        (book) => book.item_id !== payload,
      );
    },
  },
});

export const { addNewBook, removeSelectedBook } = booksSlice.actions;
export default booksSlice.reducer;
