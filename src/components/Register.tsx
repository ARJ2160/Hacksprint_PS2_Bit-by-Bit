import React, { useEffect, useState } from 'react';
import { FaFacebook, FaLinkedin, FaShoppingCart } from 'react-icons/fa';

interface Errors {
  email: string;
  password: string;
}

// interface formValues {
//   email: string;
//   password: string;
// }

const Register = () => {
  //Form settings

  const [formValues, setFormValue] = useState<any>();
  const [formErrors, setFormErrors] = useState<Errors>({
    email: '',
    password: ''
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValue({ ...formValues, [name]: value });
  };

  const validate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    formValues: any
  ) => {
    e.preventDefault();
    const errors: Errors = { email: '', password: '' };
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!formValues.email) {
      errors.email = 'Email is Required';
    } else if (!regex.test(formValues.email)) {
      errors.email = 'Enter valid Email';
    }
    if (!formValues.password) {
      errors.password = 'Password is Required';
    }

    //Check if there are no errors
    if (Object.keys(errors).length === 0) {
      setFormValue({ email: '', password: '' });
      setIsSubmit(true);
    }
    return errors;
  };

  useEffect(() => {})
  return (
    <div className='grid justify-center items-center'>
      <div className='form'>
        <div className='lg:text-6xl sm:text-5xl text-3xl mb-10 text-pinkRed'>
          Register
        </div>
        <form method='POST'>
          <input
            className='focus:outline-none txt-field'
            type='text'
            name='Email'
            placeholder='Email*'
            value={formValues.email}
            onChange={handleChange}
            autoComplete='off'
          />
          <p className='form-errors text-red-600'>{formErrors.email}</p>
          <input
            className=' mt-5 focus:outline-none focus:border-transparent'
            type='text'
            name='Password'
            placeholder='Password*'
            value={formValues.password}
            onChange={handleChange}
            autoComplete='off'
          />
          <p className='form-errors text-red-600'>{formErrors.password}</p>
          <button
            onClick={e => {
              setFormErrors(validate(e, formValues));
            }}
            type='submit'
            className='w-40 h-10 bg-pinkRed text-white rounded-lg mt-5'
          >
            Send Mail
          </button>
        </form>
      </div>
    </div>

    // <div>
    //   {Object.keys(formErrors).length === 0 && isSubmit ? (
    //     <div className='text-white message-text'>Message Sent Successfully</div>
    //   ) : (
    //     ''
    //   )}
    //   <span className='font-bold'>Contact Us</span>
    //   <div className='contact-us'>
    // <form method='post' className='flex-col' name='google-sheet'>
    //   <input
    //     className='txt-field'
    //     type='text'
    //     name='Email'
    //     placeholder='Email*'
    //     value={formValues.email}
    //     onChange={handleChange}
    //     autoComplete='off'
    //   />
    //   <p className='form-errors'>{formErrors.email}</p>
    //   <input
    //     className='txt-field mt-5'
    //     type='text'
    //     name='Password'
    //     placeholder='Password*'
    //     value={formValues.password}
    //     onChange={handleChange}
    //     autoComplete='off'
    //   />
    //   <p className='form-errors'>{formErrors.password}</p>
    //   <button
    //     onClick={e => {
    //       setFormErrors(validate(e, formValues));
    //     }}
    //     type='submit'
    //     className='submit-btn mt-3'
    //   >
    //     Send Mail
    //   </button>
    // </form>

    //     <div className='contact--find-us pt-5'>
    //       <span className='bold-heading contact--find-text'>Find Us</span>
    //       <div className='contact--address mt-4'>
    //             <h1>Address</h1>
    //             <span className='lead'>
    //               Samtej Industries LLP,
    //               <br /> 69/1, Shripati complex Vagdaon-Dhayari TEL EXCH. BLDG.,
    //               <br /> Vagdaon (BK), Pune - 411041
    //               <br />
    //               Landmark : Next to Axis Bank or Dhareshwar Mangal Karyalaya,
    //               Dhayari Phata
    //             </span>
    //           </div>
    //     </div>
    //     <div className='contact--bottom-container'>
    //       <div className='contact--social-media pt-5'>
    //         <h1>Social Media</h1>
    //         <div className='footer--social--icons d-flex'>
    //           <a
    //             href='https://www.facebook.com/SanjayJoshiSLK/'
    //             style={{ color: '#ffffff' }}
    //             target='_blank'
    //             rel='noreferrer'
    //           >
    //             <FaFacebook
    //               className='img-fluid me-5 mt-4'
    //               style={{ width: '40px', height: '40px' }}
    //             />
    //           </a>
    //           <a
    //             href='https://www.linkedin.com/in/sanjay-joshi-339ab126?fromQR=1'
    //             style={{ color: '#ffffff' }}
    //             target='_blank'
    //             rel='noreferrer'
    //           >
    //             <FaLinkedin
    //               className='img-fluid me-5 mt-4'
    //               style={{ width: '40px', height: '40px' }}
    //             />
    //           </a>
    //           <a
    //             href='https://www.indiamart.com/samtej-industries/'
    //             style={{ color: '#ffffff' }}
    //             target='_blank'
    //             rel='noreferrer'
    //           >
    //             <FaShoppingCart
    //               className='img-fluid me-5 mt-4'
    //               style={{ width: '40px', height: '40px' }}
    //             />
    //           </a>
    //         </div>
    //       </div>
    //       <div className='contact--number pt-5'>
    //             <h1>Contact Details</h1>
    //             <div className='contact--mail-nos mt-3'>
    //               <span className='lead' style={{ fontSize: '16px' }}>
    //                 samtejindustriesllp@gmail.com
    //                 <br />
    //                 9822214198
    //                 <br />
    //                 8796666160
    //               </span>
    //             </div>
    //           </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Register;
