import React from 'react';
import Image from 'next/image';
import BookSVG from '../assets/books.svg';
import { data } from '../assets/data';

export const Hero = (): JSX.Element => {
  return (
    <div className='App grid grid-cols-2 h-screen p-5 bg-bgColor'>
      <div className='flex justify-center items-start flex-col pl-10 col-span-1 '>
        <div className='font-medium lg:text-5xl md:text-4xl text-3xl mb-5 leading-5 tracking-wider  text-pinkRed uppercase'>
          {data.hero_heading}
        </div>
        <div className='text-xl text-slate-700'>{data.hero_subheading}</div>
      </div>
      <div className='flex justify-center items-center col-span-1'>
        <Image
          width={BookSVG.width}
          height={BookSVG.height}
          src={BookSVG.src}
          priority={true}
          alt=''
        />
      </div>
    </div>
  );
};
