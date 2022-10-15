import React from 'react';
import { Link } from 'react-router-dom';
import navIcon from "../assets/navIcon.png"

export const Navbar = () => {
  return (
    <nav className='bg-bgColor text-black'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='block h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
              <svg
                className='hidden h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex flex-shrink-0 items-center'>
              <a href="/"><img className='w-10 h-10' src={navIcon} alt="" /></a>
            </div>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex space-x-4'>
                <Link
                  to='/'
                  className='hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Home
                </Link>
                <Link
                  to='/books'
                  className='hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Books
                </Link>
                <Link
                  to='/signin'
                  className='hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Sign In
                </Link>
                <Link
                  to='/signup'
                  className='hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sm:hidden' id='mobile-menu'>
        <div className='space-y-1 px-2 pt-2 pb-3'>
          <a
            href='/'
            className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
            aria-current='page'
          >
            Home
          </a>

          <a
            href='/books'
            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Books
          </a>
          <a
            href='/signin'
            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Sign In
          </a>

          <a
            href='/signup'
            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Sign Up
          </a>

        </div>
      </div>
    </nav>
  );
};
