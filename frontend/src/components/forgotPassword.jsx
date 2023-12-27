import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');
  const [otpSubmitted, setOtpSubmitted] = useState(false); // New state variable

  const handleEmailSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3001/user/forgotPassword', { email });
      const data = response.data;

      setMessage(data.message);

      if (response.status === 200) {
        // Handle success, e.g., show OTP input field
        setOtpSubmitted(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleOtpSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3001/user/verifyOtp', { email, otp });
      const data = response.data;

      setMessage(data.message);

      if (response.status === 200) {
        setToken(data.token);
        // Handle success, e.g., redirect to password reset page
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container'>
      <h2>Forgot Password</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleEmailSubmit}>Submit</button>
      </div>
      {message && <p>{message}</p>}

      {/* Display OTP input field and submit button only if email submission is successful */}
      {otpSubmitted && (
        <div>
          <label>OTP:</label>
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
          <button onClick={handleOtpSubmit}>Submit OTP</button>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
