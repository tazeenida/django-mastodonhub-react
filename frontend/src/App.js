import './styles.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Events from './components/Events';
import Clubs from './components/ClubsPage';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import UserProfile from './components/UserProfile';

function App() {
  const isLoggedIn = false;
  const isSignedUp = true;

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          {/* Redirect based on authentication status */}
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/Events" element={<Events />} />
              <Route path="/Clubs" element={<Clubs />} />
              <Route path="/Logout" element={<Logout />} />
              <Route path="/UserProfile" element={<UserProfile />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Navigate to="/Login" />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
            </>
          )}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;