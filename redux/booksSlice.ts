import { createSlice } from '@reduxjs/toolkit';
import { booksType } from '../pages/books';

const initialState: booksType[] = [
  {
    id: 0,
    title: '',
    ISBN: '',
    pageCount: 0,
    publishedDate: new Date(),
    thumbnailUrl: '',
    longDescription: '',
    status: '',
    authors: [],
    categories: [],
    price: 0
  }
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    storeBooks: (state, { payload }): any => {
      const {
        title,
        isbn,
        pageCount,
        publishedDate,
        thumbnailUrl,
        longDescription,
        status,
        authors,
        categories,
        price
      } = payload.formValues;
      return [
        ...state,
        {
          title,
          isbn,
          pageCount,
          publishedDate,
          thumbnailUrl,
          longDescription,
          status,
          authors,
          categories,
          price
        }
      ];
    }
  }
});

export const { storeBooks } = booksSlice.actions;
export default booksSlice.reducer;
