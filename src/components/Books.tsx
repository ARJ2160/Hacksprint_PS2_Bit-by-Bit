import React, { useEffect, useState } from 'react';
import BookCard from './BookCard.tsx';
// import { Book } from '../types';
import {storeBooks} from "../redux/booksSlice"
import { useDispatch } from 'react-redux'
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
  let dispatch = useDispatch()
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('/books')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        dispatch((storeBooks({data})))
        setBooks(books)
      })
      // .then(data => setBooks(data));
  }, []); 
  if(books){
  return (
    <div>
      {books.map((x, i) => {
        return (
          <BookCard data={x} key={i}/>
        )
      })}
    </div>
  )
    } else {
      return <h1>Still Loading....</h1>
    }
};