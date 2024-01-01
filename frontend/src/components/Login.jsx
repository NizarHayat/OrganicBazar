
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', formData);
      const { data, status } = response;

      if (status === 200) {
        localStorage.setItem('accessToken', data.token);
        toast.success('Login successful!');
        navigate('/CustomerDashboard');
      } else {
        toast.error('Login failed: ' + data.message);
      }

      setFormData({
        email: '',
        password: '',
      });
    } catch (error) {
      toast.error('Incorrect email or password');
    }
  };

  const redirectToForgotPassword = () => {
    navigate('/forgotpassword');
  };

  const { email, password } = formData;

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="image-container">
            <img
              className='mb-5'
              width="600px"
              height="700px"
              src="https://images.pexels.com/photos/6214471/pexels-photo-6214471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt='s'
            />
          </div>
        </div>
  
        <div className="col-6 d-flex align-items-center justify-content-center">
          <form className="form-container" onSubmit={onSubmit}>
            <h2>Log in to Organic Bazaar</h2>
            <p className='mt-2'>Enter your details below</p>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={email}
                className="form-control"
                onChange={onChange}
                id="exampleFormControlInput1"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={password}
                className="form-control"
                onChange={onChange}
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Password"
              />
            </div>
            <button className="btn btn-primary btn-dark" style={{ width: '100%' }}>Log In</button>
            <button className="btn btn-primary mt-2" onClick={redirectToForgotPassword} style={{ width: '100%' }}>Forgotten Password?</button>
            <a href='/signup'>Signup</a>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
