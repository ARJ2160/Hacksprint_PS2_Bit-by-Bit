import React, { useEffect, useState } from 'react';
// import { Book } from '../types';
// import {storeBooks} from "../redux/booksSlice"
import { useDispatch } from 'react-redux'
import { data } from '../assets/data.ts';
import { BookCard } from './index.ts';

export interface Books {
  id: number;
  title: string;
  ISBN?: string;
  pageCount?: number;
  publishedDate?: Date;
  thumbnailUrl?: string;
  longDescription?: string;
  status?: string;
  authors?: string[];
  categories?: string[];
  price?: number;
}

export const BooksPage = () => {
  let dispatch = useDispatch();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('/books')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBooks(data)
      })
  }, []); 
  if(books){
  return (
    <div className='pt-5'>
      <div className='flex justify-center flex-col items-center '>
      <div className='font-bold text-4xl'>
      I code for &#8734;
     </div>
      <p>{data.books_subheading}</p>
      </div>
    <div className='grid grid-cols-4 gap-10 border-black p-10'>
      {books.map((x, i) => {
        return (
          <BookCard data={x} key={i} />
        )
      })}
       
    </div>
    </div>
  )
    } else {
      return <h1>Still Loading....</h1>
    }
};
