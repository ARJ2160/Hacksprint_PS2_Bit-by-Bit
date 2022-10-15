import React from 'react';
import BookCard from './BookCard';
// import { Book } from '../types';

export interface Books {
  id: number;
  title: string;
  ISBN: string;
  pageCount: number;
  publishedDate: Date;
  thumbnailUrl: string;
  longDescription: string;
  status: string;
  authors: string[];
  categories: string[];
  price: number;
}

const Books = (props: Books) => {
  const {} = props;
  return (
    <div>
      <BookCard />
    </div>
  );
};

export default Books;
