import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPen } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    hobbies: '',
    gender: 'Male',
    message: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/contact', formData);
      console.log('Form submitted:', formData, response);

      setFormData({
        name: '',
        email: '',
        phone: '',
        age: '',
        hobbies: '',
        gender: 'Male',
        message: '',
      });
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className='container'>
      <h2>Contact Us</h2>
      <div className='row'>
        {/* Address Column */}
        <div className='col-md-6 mt-5'>
          <h3>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Address
          </h3>
          <p>
            Your Address Goes Here
            <br />
            City, Country
          </p>
          <h3>
            <FontAwesomeIcon icon={faPen} /> Write to us
          </h3>
          <p>
            Your Address Goes Here
            <br />
            City, Country
          </p>
        </div>
        {/* Form Column */}
        <div className='col-md-6 mb-5'>
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
              <label htmlFor='age' className='form-label'>
                Age
              </label>
              <input
                type='number'
                className='form-control'
                id='age'
                name='age'
                value={formData.age}
                onChange={onChange}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='hobbies' className='form-label'>
                Hobbies
              </label>
              <input
                type='text'
                className='form-control'
                id='hobbies'
                name='hobbies'
                value={formData.hobbies}
                onChange={onChange}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='gender' className='form-label'>
                Gender
              </label>
              <select
                className='form-select'
                id='gender'
                name='gender'
                value={formData.gender}
                onChange={onChange}
                required
              >
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Other'>Other</option>
              </select>
            </div>
            <div className='mb-3'>
              <label htmlFor='message' className='form-label'>
                Message
              </label>
              <textarea
                className='form-control'
                id='message'
                name='message'
                value={formData.message}
                onChange={onChange}
                required
              ></textarea>
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
