import React, { useState } from 'react';
import { data } from '../assets/data';
import { BookCard } from '../components/index';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import useFetch from '../hooks/useFetch';

const Books = (): JSX.Element => {
  const {
    data: booksDetails,
    isPending,
    errorMsg
  } = useFetch('http://localhost:5000/books');

  return (
    <div className='pt-5'>
      <div className='flex justify-center flex-col items-center '>
        <div className='font-bold text-4xl'>I code for &#8734;</div>
        <p>{data.books_subheading}</p>
      </div>
      <div className='grid grid-cols-4 gap-10 border-black p-10'>
        {!isPending ? (
          booksDetails?.map((x: any, i: number) => {
            return <BookCard data={x} key={i} />;
          })
        ) : (
          <Box className='h-screen flex justify-center items-center flex-column'>
            <CircularProgress /> {errorMsg}
          </Box>
        )}
      </div>
    </div>
  );
};

export default Books;
