import { EMAIL_REGEX } from '../constants';
import { genericSignup, useValidateProps } from '../types';

export const useValidate = ({
  e,
  formValues,
  mode,
  rememberMe
}: useValidateProps): genericSignup => {
  console.log('HEREEEEEEEE');
  e.preventDefault();
  const errors: genericSignup = {
    name: '',
    email: '',
    password: '',
    phone: '',
    address: ''
  };

  if (mode === 'signin' || mode === 'forgotPassword') {
    if (!formValues?.email) {
      errors.email = 'Email is Required';
    } else if (!EMAIL_REGEX.test(formValues.email)) {
      errors.email = 'Enter valid Email';
    }
    if (!formValues?.password) {
      errors.password = 'Password is Required';
    }
  } else if (mode === 'signup') {
    if (!formValues?.email) {
      errors.email = 'Email is Required';
    } else if (!EMAIL_REGEX.test(formValues.email)) {
      errors.email = 'Enter valid Email';
    }
    if (!formValues?.password) {
      errors.password = 'Password is Required';
    }
    if (!formValues?.name) {
      errors.name = 'Name is Required';
    }
    if (
      formValues.phone &&
      (formValues?.phone.length < 10 || !parseInt(formValues.phone))
    ) {
      errors.phone = 'Phone Number is Invalid';
    }
    if (!formValues?.phone) {
      errors.phone = 'Phone Number is Required';
    }

    if (!formValues?.address) {
      errors.address = 'Address is Required';
    }
  }
  // Check if there are no errors
  if (Object.values(errors).every(x => x === null || x === '')) {
    fetch('https://library-flask-arj2160.vercel.app/' + mode, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValues)
    })
      .then(res => {
        console.log(res);
        res.json();
      })
      // .then(() => {
      //   if (rememberMe) {
      //     sessionStorage.setItem('name', formValues.name);
      //     sessionStorage.setItem('email', formValues.email);
      //     sessionStorage.setItem('phone', formValues.phone);
      //     sessionStorage.setItem('address', formValues.address);
      //   };
      // })
      // .then(data => {
      //   console.log('Success', data);
      //     setFormValue({
      //     name: '',
      //     email: '',
      //     password: '',
      //     phone: '',
      //     address: ''
      //   });
      // })
      .catch(err => console.log(err));
  }
  console.log('ERRORS', errors);
  return errors;
};
