import { LockClosedIcon } from '@heroicons/react/20/solid';
import { Input, InputLabel, TextareaAutosize } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import signUpSVG from '../assets/signup.svg';
import { useValidate } from '../hooks/useValidate';
import { genericSignup } from '../types';
const mode = 'signup';

const signup = (): JSX.Element => {
  const [formValues, setFormValue] = useState<genericSignup>({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: ''
  });
  const [formErrors, setFormErrors] = useState<genericSignup>({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValue({ ...formValues, [name]: value });
  };

  const validate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    formValues: genericSignup
  ) => {
    setFormErrors(useValidate({ e, formValues, mode }));
  };

  useEffect(() => {
    console.log('FORM ERRORS =>', formErrors);
  }, [formErrors]);

  // const storeInSession = () => {
  //   sessionStorage.setItem('name', formValues.name);
  //   sessionStorage.setItem('email', formValues.email);
  //   sessionStorage.setItem('phone', formValues.phone);
  //   sessionStorage.setItem('address', formValues.address);
  // };

  return (
    <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <Image
            width={signUpSVG.width}
            height={signUpSVG.height}
            className='mx-auto h-20 w-20'
            src={signUpSVG}
            alt='Sign Up'
          />
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
            Sign up and register yourself for free
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Or{' '}
            <a href='#' className='font-medium text-pinkRed'>
              start your 14-day free trial
            </a>
          </p>
        </div>
        <form className='mt-8 space-y-6'>
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='rounded-md shadow-sm'>
            <div className='mt-5'>
              <label htmlFor='name' className='sr-only'>
                Name
              </label>
              <Input
                id='name'
                name='name'
                type='name'
                autoComplete='name'
                required
                error={formErrors.name ? formErrors.name.length > 0 : false}
                className='input-style input'
                placeholder='Name'
                value={formValues?.name}
                onChange={e => {
                  formErrors.name = '';
                  handleChange(e);
                }}
              />
              <p className='text-sm text-red-500'>{formErrors.name}</p>
            </div>
            <div className='my-5'>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <Input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                className={`${
                  formErrors.email.length > 0
                    ? 'input-style error-input'
                    : 'input-style input'
                }`}
                placeholder='Email address'
                value={formValues?.email}
                onChange={e => {
                  formErrors.email = '';
                  handleChange(e);
                }}
              />
              <p className='text-sm text-red-500'>{formErrors.email}</p>
            </div>
            <div className='my-5'>
              <label htmlFor='phoneNumber' className='sr-only'>
                Phone Number
              </label>
              <Input
                id='password'
                name='password'
                type={`${formErrors.password.length > 0 ? 'text' : 'password'}`}
                autoComplete='current-password'
                required
                className={`${
                  formErrors.password.length > 0
                    ? 'input-style error-input'
                    : 'input-style input'
                }`}
                placeholder='Password'
                value={formValues?.password}
                onChange={e => {
                  formErrors.password = '';
                  handleChange(e);
                }}
              />
              <p className='text-sm text-red-500'>{formErrors.password}</p>
            </div>
            <div className='my-5'>
              <label htmlFor='phoneNumber' className='sr-only'>
                Phone Number
              </label>
              <Input
                id='phone'
                name='phone'
                type='string'
                autoComplete='phone'
                required
                error={formErrors.phone ? formErrors.phone.length > 0 : false}
                className='input-style input'
                placeholder='Phone Number'
                value={formValues?.phone}
                onChange={e => {
                  formErrors.phone = '';
                  handleChange(e);
                }}
              />
              <p className='text-sm text-red-500'>{formErrors.phone}</p>
            </div>
            <div className='my-5'>
              <label htmlFor='address' className='sr-only'>
                Address
              </label>
              <TextareaAutosize
                aria-label='empty textarea'
                placeholder='Address'
                required
                autoComplete='address'
                minRows={3}
                minLength={10}
                id='address'
                name='address'
                value={formValues?.address}
                onChange={e => {
                  formErrors.address = '';
                  handleChange(e);
                }}
                className='input-style'
              />
              <p className='text-sm text-red-500'>{formErrors.address}</p>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                id='remember-me'
                name='remember-me'
                type='checkbox'
                className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
              />
              <label
                htmlFor='remember-me'
                className='ml-2 block text-sm text-gray-900'
                // onClick={storeInSession}
              >
                Remember me
              </label>
            </div>

            <div className='text-sm'>
              <Link
                href='/forgot-pass'
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <button
              type='submit'
              className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              onClick={e => validate(e, formValues)}
            >
              <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                <LockClosedIcon
                  className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                  aria-hidden='true'
                />
              </span>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signup;
