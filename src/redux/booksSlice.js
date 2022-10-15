import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    storeBooks: (state, { payload }) => {
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
