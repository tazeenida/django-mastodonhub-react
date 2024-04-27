// SignUp Component
import React, { useState } from 'react';
import axios from 'axios';

const backendUrl = 'https://mastodonhub-1.onrender.com';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${backendUrl}/signUp/`,
        {
          username,
          email,
          password,
        },
        { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
      );

      if (response.status === 201) {
        alert('User created successfully!');
        window.location.href = '/login';
      } else {
        setErrorMessage('Signup failed. Please try again.');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.error || 'An unexpected error occurred.');
      } else {
        setErrorMessage('Signup failed. Please try again.');
        console.error('Signup failed:', error);
      }
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Signup</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input 
              type="email" 
              className="form-control" 
              placeholder="Enter email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input 
              type="password" 
              className="form-control" 
              placeholder="Enter password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </div>
          {errorMessage && (
            <div className="alert alert-danger mt-3">{errorMessage}</div>
          )}
        </div>
      </form>
    </div>
  );
};

export default SignUp;