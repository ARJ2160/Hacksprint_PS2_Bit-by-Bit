import Link from 'next/link';
import React from 'react';

export const BookCard = ({ data, i }: any): JSX.Element => {
  return (
    <Link href={`${'http://localhost:3000/book/' + data?.isbn}`}>
      <div
        key={i}
        className='flex justify-center flex-col p-5 transition hover:translate-y-5 ease-in duration-150 items-center h-80 bg-white text-black shadow-lg rounded-lg my-4'
      >
        <div className='flex-1'>
          {/* <a
            href={` ${'/books/' + data?.isbn}`}
            target='_blank'
            rel='noopener noreferrer'
          > */}
          <img
            className='w-20 h-20 aspect-auto object-cover object-center'
            src={data?.thumbnailUrl}
            alt='No image available'
          />
          {/* </a> */}
        </div>
        <div className='flex-1 overflow-hidden'>
          <h1
            className={`${
              data?.name < 10 ? `lg:text-xl md:text-base` : `lg:text-xl text-xl`
            }`}
          >
            {data?.title}
          </h1>
          <p className='py-2 text-sm'>
            {data?.longDescription.slice(0, 300) + '...'}
          </p>
        </div>
      </div>
    </Link>
  );
};
