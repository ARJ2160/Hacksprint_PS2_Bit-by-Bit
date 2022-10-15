import React from 'react';
// import Pagination from './Pagination';
// import { ProjectCardProps } from '../../types/types';

const BookCard = ({ data, key }: any): JSX.Element => {
  return (
    <div key={key}>{data?.title}</div>
    // <div
    //   key={card?.id}
    //   className='max-w-md min-h-full bg-white text-black shadow-lg rounded-lg overflow-hidden my-4'
    //   data-aos='fade-up'
    // >
    //   <a href={card?.projectLink} target='_blank' rel='noopener noreferrer'>
    //     <img
    //       className='w-full aspect-auto object-cover object-center'
    //       src={card?.image}
    //       width={card?.image.width}
    //       height={card?.image.height}
    //       loading='lazy'
    //       alt='No image available'
    //     />
    //   </a>
    //   <div className='py-4 px-4'>
    //     <h1 className='text-2xl'>{card?.title}</h1>
    //     <a href={card?.link} target='_blank' rel='noopener noreferrer'>
    //       <p className='text-blue-600 my-2'>View Code</p>
    //     </a>
    //     <p className='py-2 text-lg'>{card?.description}</p>
    //     <div className='mt-4 mb-8 flex flex-wrap justify-center items-center gap-2'>
    //       {card?.tags.map((tag: string, i: number) => (
    //         <div key={i} className='px-4 py-1 border-2 rounded-full'>
    //           {tag}
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   <Pagination />
    // </div>
  );
};

export default BookCard;
