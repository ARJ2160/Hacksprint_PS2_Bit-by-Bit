import React, { useEffect, useState } from 'react';
import { data } from '../assets/data';
import { BookCard, Loader } from '../components/index';
import { useDispatch, useSelector } from 'react-redux';
import { clearResults, storeBooks } from '../redux/booksSlice';

const Books = (): JSX.Element => {
  const dispatch = useDispatch();
  const reduxBooks = useSelector((state: any) => state.books);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    reduxBooks.length > 0
      ? setData(reduxBooks)
      : fetch(process.env.LIBRARY_BACKEND + '/books')
          .then(res => res.json())
          .then(data => {
            setData(data);
            dispatch(storeBooks(data));
          })
          .catch(err => console.log(err));
  }, []);

  return (
    <div className='pt-5'>
      <div className='flex justify-center flex-col items-center '>
        <div className='font-bold text-4xl'>I code for &#8734;</div>
        <p>{data.books_subheading}</p>
      </div>
      <button onClick={() => dispatch(clearResults())}>CLEAR RESULTS</button>
      <div className='grid grid-cols-4 gap-10 border-black p-10'>
        {data.length > 0 ? (
          data.map((x: any, i: number) => {
            return <BookCard data={x} key={i} />;
          })
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Books;
