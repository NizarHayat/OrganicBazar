import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Email = () => {
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    message: '',
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
    
    try {
      const response = await axios.post('http://localhost:3001/email', formData);
      console.log('Form submitted successfully:', formData, response);

      toast.success('Form submitted successfully');
      
      setFormData({
        title: '',
        subject: '',
        message: '',
     
      });
    } catch (error) {
      console.error('Error:', error);
      
    }
  };

  return (
    <div className='container'>
      <h2>Emails</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Subject</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Message</label>
          <input
            type="text"
            className="form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={onChange}
            required
          />
        </div>

       
        <button type="submit" className="btn btn-primary">Submit</button>
        <ToastContainer />
      </form>
    </div>
  );
}
export default Email;
