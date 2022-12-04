import React, { useEffect, useState } from 'react';
// import {storeBooks} from "../redux/booksSlice"
// import { useDispatch } from "react-redux";
import { data } from '../assets/data';
import { BookCard } from '../components/index';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import { booksType } from '../types';

const Books = (): JSX.Element => {
  const [books, setBooks] = useState<booksType[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/books')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBooks(data);
      });
  }, []);

  if (books.length > 0) {
    return (
      <div className='pt-5'>
        <div className='flex justify-center flex-col items-center '>
          <div className='font-bold text-4xl'>I code for &#8734;</div>
          <p>{data.books_subheading}</p>
        </div>
        <div className='grid grid-cols-4 gap-10 border-black p-10'>
          {books.map((x, i) => {
            return <BookCard data={x} key={i} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <Box className='h-screen flex justify-center items-center flex-column'>
        <CircularProgress />
      </Box>
    );
  }
};

export default Books;
