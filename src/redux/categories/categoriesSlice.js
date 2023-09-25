import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      state.categories = action.payload === 'Under Construction' ? 'Under Construction' : state.categories;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
