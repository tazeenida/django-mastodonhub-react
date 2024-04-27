import React, { useState } from 'react';
import axios from 'axios';

const backendUrl = 'https://django-mastodonhub-react-1.onrender.com';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const submit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${backendUrl}/token/`, {
        username,
        password,
      });

      if (data.access && data.refresh) {
        localStorage.clear();
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;
        window.location.href = '/';
      } else {
        setErrorMessage('Unexpected response format.');
      }
    } catch (error) {
      setErrorMessage('Login failed. Please try again.');
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input 
              className="form-control mt-1" 
              placeholder="Enter username" 
              name="username" 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input 
              className="form-control mt-1" 
              placeholder="Enter password" 
              name="password" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          {errorMessage && (
            <div className="alert alert-danger mt-3">{errorMessage}</div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;