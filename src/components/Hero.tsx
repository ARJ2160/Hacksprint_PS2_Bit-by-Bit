import React, { useEffect, useState } from 'react';
import BookSVG from '../assets/books.svg';
import BookData from "../assets/books.json"

const Hero = () => {
  const [books, setBooks] = useState()

  console.log(BookData);
  console.log(books);
  return (
    <div className='App grid grid-cols-2 bg-bgColor h-screen p-5'>
      <div className='flex justify-center items-start flex-col pl-10 col-span-1 '>
        <div className='font-medium lg:text-6xl md:text-4xl text-3xl mb-5 text-pinkRed'>
          Online Library
        </div>
        <div className='text-xl text-slate-700'>
          We believe a world-class library should be a direct reflection of the
          exquisite nature of the content we preserve.
        </div>
      </div>
      <div className='flex justify-center items-center col-span-1'>
        <img src={BookSVG} alt='' />
      </div>
    </div>
  );
};

export default Hero;
