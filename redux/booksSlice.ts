import { createSlice } from '@reduxjs/toolkit';
import { booksType } from '../types';

const initialState: booksType[] | any = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    storeBooks: (state, { payload }): any => {
      console.log(payload);
      // const {
      //   title,
      //   isbn,
      //   pageCount,
      //   publishedDate,
      //   thumbnailUrl,
      //   longDescription,
      //   status,
      //   authors,
      //   categories,
      //   price
      // } = payload;
      return [...state, ...payload];
    },
    clearResults: () => {
      return initialState;
    }
  }
});

export const { storeBooks, clearResults } = booksSlice.actions;
export default booksSlice.reducer;
export { initialState };
