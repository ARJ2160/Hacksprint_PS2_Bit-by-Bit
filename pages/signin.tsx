import React, { useEffect, useState } from 'react';
import { LockOpenIcon } from '@heroicons/react/20/solid';
import signInSVG from '../assets/signin.svg';
import Image from 'next/image';
import { Errors, formValues } from '../types';
import { Checkbox, FormControlLabel, FormGroup, Input } from '@mui/material';
import { useValidate } from '../hooks/useValidate';
const mode = 'signin';

const signin = (): JSX.Element => {
  const [formValues, setFormValue] = useState<formValues>({
    email: '',
    password: '',
    rememberMe: false
  });
  const [formErrors, setFormErrors] = useState<Errors>({
    email: '',
    password: ''
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValue({ ...formValues, [name]: value });
  };

  const validate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    formValues: formValues
  ) => {
    setFormErrors(useValidate({ e, formValues, mode }));
  };

  useEffect(() => {
    console.log('FORM ERRORS =>', formErrors);
  }, [formErrors]);

  return (
    <>
      <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-md space-y-8'>
          <div>
            <Image
              width={signInSVG.width}
              height={signInSVG.height}
              className='mx-auto h-20 w-20'
              src={signInSVG}
              alt='Sign In'
            />
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
              Sign in to your account
            </h2>
            <p className='mt-2 text-center text-sm text-gray-600'>
              Or{' '}
              <a href='#' className='font-medium text-pinkRed'>
                start your 14-day free trial
              </a>
            </p>
          </div>
          <form className='mt-8 space-y-6' action='#' method='POST'>
            <div className='-space-y-px rounded-md shadow-sm'>
              <div className='mb-5'>
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
              <div className='mb-5'>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <Input
                  id='password'
                  name='password'
                  type={`${
                    formErrors.password.length > 0 ? 'text' : 'password'
                  }`}
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
            </div>
            <div className='flex items-center justify-between'>
              <FormGroup>
                <FormControlLabel
                  value={formValues?.rememberMe}
                  control={<Checkbox defaultChecked />}
                  label='Remember me'
                />
              </FormGroup>
            </div>
            <div>
              <button
                type='submit'
                className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                onClick={e => validate(e, formValues)}
              >
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <LockOpenIcon
                    className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                    aria-hidden='true'
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default signin;
