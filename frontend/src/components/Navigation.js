import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    setIsAuth(token !== null);
  }, []);

  return (
    <nav className="main-nav">
      <div className="mastodon-label">
        <p>MastodonHub</p>
      </div>

      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/clubs">Clubs</Link></li>
      </ul>

      <div className="login-signup">
        <Nav>
          {isAuth ? (
            <li><Link to="/userprofile">Profile</Link></li>
          ) : (
            <li><Link to="/signup">Signup</Link></li>
          )}
        </Nav>

        <Navbar bg="dark" variant="dark">
          <Nav className="me-auto"></Nav>
          <Nav>
            {isAuth ? (
              <li><Link to="/logout">Logout</Link></li>
            ) : (
              <li><Link to="/login">Login</Link></li>
            )}
          </Nav>
        </Navbar>
      </div>
    </nav>
  );
};

export default Navigation;