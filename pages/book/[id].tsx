import React, { useEffect, useState } from 'react';
// import Wishlist from "../assets/navbar-icons/wishlist.svg"
import { useRouter } from 'next/router';
import { Box, Button, CircularProgress } from '@mui/material';
// import Button from '@mui/joy/Button';
import Image from 'next/image';

export const BookDesc = (): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;
  const [bookDesc, setBookDesc] = useState<any>();
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://library-flask-arj2160.vercel.app/book/' + `${id}`)
      .then(res => res.json())
      .then(data => {
        setBookDesc(data);
      })
      .catch(err => console.log(err));
  }, []);

  if (bookDesc) {
    return (
      <section className='text-gray-700 overflow-hidden bg-white'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='lg:w-4/5 mx-auto flex flex-wrap' key={bookDesc._id}>
            {/* <Image
              width={500}
              height={700} */}
            <img
              alt={bookDesc.title}
              className='lg:w-1/2 w-full object-center rounded border border-gray-200'
              src={bookDesc.thumbnailUrl}
            />
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <h2 className='text-sm text-gray-500 tracking-widest mb-5'>
                Home/{bookDesc.categories}/{bookDesc.title}
              </h2>
              <div className='mb-5'>
                <h1 className='text-gray-900 text-3xl title-font mb-1'>
                  {bookDesc.title} by
                </h1>
                <h3 className=''>{bookDesc.authors}</h3>
              </div>
              <div className='flex mb-4'>
                <span className='flex items-center'>
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-4 h-4 text-red-500'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-4 h-4 text-red-500'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-4 h-4 text-red-500'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-4 h-4 text-red-500'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-4 h-4 text-red-500'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                </span>
              </div>
              <div className='flex'>
                <span className='title-font font-medium text-2xl text-gray-900 mb-5'>
                  $ {bookDesc.price}
                </span>
              </div>
              <div className='grid grid-cols-3 gap-8 py-5 items-center'>
                <div className='col-span-1 grid grid-cols-3 place-items-center'>
                  <div className='text-xl col-span-1 flex justify-center items-center'>
                    <Button
                      onClick={() => {
                        count > 0 && setCount(count - 1);
                      }}
                      value={'-'}
                      className='border-0 hover:border-0 bg-red-700 hover:bg-red-500 text-white'
                      variant='contained'
                      color='error'
                    >
                      <span>-</span>
                    </Button>
                  </div>
                  <div className='col-span-1 text-xl px-4'>{count}</div>
                  <div className='text-xl col-span-1 flex justify-center items-center'>
                    <Button
                      onClick={() => {
                        setCount(count + 1);
                      }}
                      className='border-0 hover:border-0 bg-green-700 hover:bg-green-500 text-white'
                      value={'+'}
                      variant='outlined'
                      color='success'
                    >
                      <span>+</span>
                    </Button>
                  </div>
                </div>
                <div className='add-btn col-span-1'>
                  <div className='flex justify-center text-center min-w-max bg-black text-white items-center py-5 px-10 cursor-pointer'>
                    ADD TO CART
                  </div>
                </div>
              </div>
              <p className='leading-relaxed'>{bookDesc.longDescription}</p>
              <div className='flex'>
                <button className='flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded'>
                  Buy Now
                </button>
                <button className='rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4'>
                  <svg
                    fill='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <Box className='h-screen flex justify-center items-center flex-column'>
        <CircularProgress />
      </Box>
    );
  }
};

export default BookDesc;
