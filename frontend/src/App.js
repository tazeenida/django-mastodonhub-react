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

const App = () => {
  const isLoggedIn = !!localStorage.getItem('access_token'); // Convert to boolean

  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Dashboard />} /> {/* Root route to Dashboard */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/events" element={<Events />} />
              <Route path="/clubs" element={<Clubs />} />
              <Route path="/userprofile" element={<UserProfile />} />
              <Route path="/logout" element={<Logout />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<Navigate to="/login" replace />} /> {/* Unmatched routes */}
            </>
          )}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
