import React, { useEffect, useState } from 'react';
// import { useGlobalContext } from '../context';
// import Wishlist from "../assets/navbar-icons/wishlist.svg"

export const BookDesc = (): JSX.Element => {
  // const { increase, decrease, getTotals } = useGlobalContext();
  // const [productAmount, setProductAmount] = useState(1)
  // let id = useParams();
  // id = parseInt(id, 10);
  const id = 10;
  const [bookDesc, setBookDesc] = useState<any>();
  const [count, setCount] = useState(1);

  useEffect(() => {
    // fetch(`${"/book/" + id.isbn}`)
    fetch(`${'/book/' + id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBookDesc(data);
      });
  }, []);

  if (bookDesc) {
    return (
      <section className='text-gray-700 overflow-hidden bg-white'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='lg:w-4/5 mx-auto flex flex-wrap' key={bookDesc._id}>
            <img
              alt='ecommerce'
              className='lg:w-1/2 w-full object-center rounded border border-gray-200'
              src={bookDesc.thumbnailUrl}
            />
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <h2 className='text-sm text-gray-500 tracking-widest mb-5'>
                Home/{bookDesc.title}
              </h2>
              <h1 className='text-gray-900 text-3xl title-font mb-5'>
                {bookDesc.title}
              </h1>
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
                <div className='product-amount col-span-1 flex justify-around items-center border-2 border-black'>
                  <div className='decrease align-left text-2xl border-r-2 border-black px-2'>
                    <button
                      onClick={() => {
                        setCount(count - 1);
                      }}
                    >
                      -
                    </button>
                  </div>
                  <div className='amount col-span-1 text-xl px-4'>{count}</div>
                  <div className='increase text-2xl border-l-2 border-black px-2'>
                    <button
                      onClick={() => {
                        setCount(count + 1);
                      }}
                    >
                      +
                    </button>
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
    return <h1>Still Loading....</h1>;
  }
};
