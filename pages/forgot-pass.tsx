import { LockClosedIcon } from '@heroicons/react/20/solid';
import { Input, InputLabel } from '@mui/material';
import React, { useState } from 'react';
import { forgotPassword } from '../types';

const forgotPass = () => {
  const [formValues, setFormValue] = useState<forgotPassword>({
    email: '',
    phone: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValue({ ...formValues, [name]: value });
  };

  const [formErrors, setFormErrors] = useState<forgotPassword>({
    email: '',
    phone: ''
  });
  const validate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    formValues: forgotPassword
  ) => {
    e.preventDefault();
    const errors: forgotPassword = {
      email: '',
      phone: ''
    };
    console.log(formValues);
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!formValues.email) {
      errors.email = 'Email is Required';
    } else if (!regex.test(formValues.email)) {
      errors.email = 'Enter valid Email';
    }
    if (!formValues.phone) {
      errors.phone = 'Phone Number is Required';
      if (formValues.phone.length !== 10) {
        errors.phone = 'Phone Number is invalid';
      }
    }
    // Check if there are no errors
    if (Object.keys(errors).length === 0) {
      setFormValue({
        email: '',
        phone: ''
      });
      fetch('/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues)
      })
        .then(res => res.json())
        .then(data => {
          console.log('Success', data);
          setFormValue({
            email: '',
            phone: ''
          });
        })
        .catch(err => console.log(err));
    }
    fetch('http://localhost:5000/forgot-pass', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    })
      .then(res => res.json())
      .catch(err => console.log(err));
    console.log('ERRORS', errors);
    return errors;
  };

  return (
    <div className='flex justify-center items-center flex-col mt-10'>
      <h1 className='text-2xl'>Forgot Your Password ?</h1>
      <p className='text-base'>
        Enter the email address or mobile phone number associated with your
        Amazon account.
      </p>
      <form className='mt-8 space-y-6 w-1/2'>
        <div className='my-5'>
          <h2>Enter Email Address</h2>
          <label htmlFor='email-address' className='sr-only'>
            Email address
          </label>
          <Input
            id='email-address / Phone 
            Number'
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
          <InputLabel className='text-sm text-red-500' shrink>
            {formErrors.email}
          </InputLabel>
        </div>
      </form>
      <div>
        <button
          type='submit'
          className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          onClick={e => {
            setFormErrors(validate(e, formValues));
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default forgotPass;
