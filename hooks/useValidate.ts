import { genericSignup } from '../types';

export const useValidate = (
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
  if (formValues.phone.length < 10 || !parseInt(formValues.phone)) {
    errors.phone = 'Phone Number is Invalid';
  }
  if (!formValues.phone) {
    errors.phone = 'Phone Number is Required';
  }
  if (!formValues.password) {
    errors.password = 'Password is Required';
  }
  if (!formValues.address) {
    errors.address = 'Address is Required';
  }
  // Check if there are no errors
  if (Object.values(errors).every(x => x === null || x === '')) {
    fetch('https://localhost:5000/signup', {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValues)
    })
      .then(res => {
        console.log(res);
        res.json();
      })
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
