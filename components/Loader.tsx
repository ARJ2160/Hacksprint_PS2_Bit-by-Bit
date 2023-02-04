import { CircularProgress } from '@mui/material';
import React from 'react';

export const Loader = (): JSX.Element => {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <CircularProgress />
    </div>
  );
};
