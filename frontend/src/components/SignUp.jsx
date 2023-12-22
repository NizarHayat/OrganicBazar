import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    cpassword: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.cpassword) {
      toast.error("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/user', formData);
      console.log('Form submitted successfully:', formData, response);

      toast.success('Form submitted successfully');

      setFormData({
        name: '',
        email: '',
        phone: '',
        password: '',
        cpassword: '',
      });
    } catch (error) {
      console.error('Error:', error);
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className='container'>
      <div className='row'>
   
        <div className='col-6 mb-5'>
          <div className='image-container'>
           
            <img
              className=''
              width="600px"
              height="700px"
              src='https://images.pexels.com/photos/6214478/pexels-photo-6214478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='s'
            />
          </div>
        </div>
        <div className='col-6 mt-5'>
          <h2>Create an Account</h2>
          <p>Enter you details below</p>
          <form onSubmit={onSubmit}>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>
                Name
              </label>
              <input
                type='text'
                className='form-control'
                id='name'
                name='name'
                value={formData.name}
                onChange={onChange}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input
                type='email'
                className='form-control'
                id='email'
                name='email'
                value={formData.email}
                onChange={onChange}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='phone' className='form-label'>
                Phone
              </label>
              <input
                type='text'
                className='form-control'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={onChange}
                required
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                id='password'
                name='password'
                value={formData.password}
                onChange={onChange}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='cpassword' className='form-label'>
                Confirm Password
              </label>
              <input
                type='password'
                className='form-control'
                id='cpassword'
                name='cpassword'
                value={formData.cpassword}
                onChange={onChange}
                required
              />
            </div>
            <button type='submit' className='btn btn-primary btn-dark'>
              Signup
            </button>
          </form>
        </div>     
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
