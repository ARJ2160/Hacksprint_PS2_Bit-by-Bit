import React, { useEffect, useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import signup from '../assets/signup.svg';
import { useNavigate } from "react-router-dom";

interface genericSignup {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
}

export const SignUp = () => {
  let navigate = useNavigate();

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
    e.preventDefault();
    const errors: genericSignup = {
      name: '',
      email: '',
      password: '',
      phone: '',
      address: ''
    };
    console.log(formValues);
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!formValues.email) {
      errors.email = 'Email is Required';
    } else if (!regex.test(formValues.email)) {
      errors.email = 'Enter valid Email';
    }
    if (!formValues.name) {
      errors.name = 'Name is Required';
    }
    if (!formValues.phone) {
      errors.phone = 'Phone Number is Required';
    }
    // if (!formValues.password) {
    //   errors.password = 'Password is Required';
    // }
    if (!formValues.address) {
      errors.address = 'Address is Required';
    }

    //Check if there are no errors
    // if (Object.keys(errors).length === 0) {
      // setFormValue({
      //   name: '',
      //   email: '',
      //   password: '',
      //   phone: '',
      //   address: ''
      // });
      fetch('/signup',
      {method:"POST", 
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(formValues)})
      .then(res => res.json())
      .then(data => {
        console.log('Success', data)
        setFormValue({ name: '',
        email: '',
        password: '',
        phone: '',
        address: ''});
        navigate("/")
    })
    .catch(err => console.log(err))
      // fetch('/signup')
      //   .then(res => res.json())
      //   .then(data => setTodo(data));
    // }
    console.log('ERRORS', errors);
    return errors;
  };

  return (
    <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <img className='mx-auto h-20 w-20' src={signup} alt='Your Company' />
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
            Sign up to your account
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
            <div className='mb-5'>
              <label htmlFor='name' className='sr-only'>
                Name
              </label>
              <input
                id='name'
                name='name'
                type='name'
                autoComplete='name'
                required
                className={`${
                  formErrors.name.length > 0
                    ? 'border-red-500 relative block w-full appearance-none rounded-none rounded-t-md border px-3 py-2 text-red-500 placeholder-red-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                    : 'relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                }`}
                placeholder='Name'
                value={formValues?.name}
                onChange={e => handleChange(e)}
              />
              {formErrors.name.length > 0 && (
                <p className='text-sm text-red-500 mt-1'>{formErrors.name}</p>
              )}
            </div>
            <div className='space-y-4'>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                className={`${
                  formErrors.email.length > 0
                    ? 'border-red-500 relative block w-full appearance-none rounded-none rounded-t-md border px-3 py-2 text-red-500 placeholder-red-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                    : 'relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                }`}
                placeholder='Email address'
                value={formValues?.email}
                onChange={e => handleChange(e)}
              />
              {formErrors.email.length > 0 && (
                <p className='text-sm text-red-500 mt-1'>{formErrors.email}</p>
              )}
            </div>
            <div className='mt-5'>
              <label htmlFor='phoneNumber' className='sr-only'>
                Phone Number
              </label>
              <input
                id='password'
                name='password'
                type={`${formErrors.password.length > 0 ? 'text' : 'password'}`}
                autoComplete='current-password'
                required
                className={`${
                  formErrors.password.length > 0
                    ? 'border-red-500 relative block w-full appearance-none rounded-none rounded-t-md border px-3 py-2 text-red-500 placeholder-red-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                    : 'relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                }`}
                placeholder='Password'
                value={formValues?.password}
                onChange={e => handleChange(e)}
              />
              {formErrors.password.length > 0 && (
                <p className='text-sm text-red-500 mt-1'>
                  {formErrors.password}
                </p>
              )}
            </div>
            {/* <div className='mt-5'>
              <label htmlFor='phoneNumber' className='sr-only'>
                Phone Number
              </label>
              <input
                id='phoneNumber'
                name='phoneNumber'
                type='phoneNumber'
                autoComplete='phoneNumber'
                required
                className={`${
                  formErrors.phone.length > 0
                    ? 'border-red-500 relative block w-full appearance-none rounded-none rounded-t-md border px-3 py-2 text-red-500 placeholder-red-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                    : 'relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                }`}
                placeholder='Phone Number'
                value={formValues?.phone}
                onChange={e => handleChange(e)}
              />
              {formErrors.phone.length > 0 && (
                <p className='text-sm text-red-500 mt-1'>
                  {formErrors.phone}
                </p>
              )}
            </div> */}
            <div className='mt-5'>
              <label htmlFor='address' className='sr-only'>
                Address
              </label>
              <textarea
                id='address'
                name='address'
                autoComplete='address'
                required
                className={`${
                  formErrors.address.length > 0
                    ? 'border-red-500 relative block w-full appearance-none rounded-none rounded-t-md border px-3 py-2 text-red-500 placeholder-red-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                    : 'relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                }`}
                placeholder='Address'
                value={formValues?.address}
                onChange={e => handleChange(e)}
              />
              {formErrors.address.length > 0 && (
                <p className='text-sm text-red-500 mt-1'>
                  {formErrors.address}
                </p>
              )}
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
              >
                Remember me
              </label>
            </div>

            <div className='text-sm'>
              <a
                href='#'
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              onClick={e => {
                setFormErrors(validate(e, formValues));
              }}
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
