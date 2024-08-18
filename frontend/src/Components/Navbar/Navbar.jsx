import React, { useState, useEffect } from 'react';
import './Navbar.css'; 
import logo from './logo.svg';
import profile from './profile.svg';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in when the component mounts
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // If token exists, user is logged in
  }, []);

  const handleLogout = () => {
    // Clear token from local storage
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    toast.success('Successfully logged out!');
    setTimeout(() => {
      navigate('/');
    }, 1000); // Redirect after showing the toast
  };

  return (
    <>
      <ToastContainer />
      <nav className="navbar-nav">
        <div className="logo-nav">
          <Link to="/"><img className='logoo-nav' src={logo} alt='logo' /></Link>
        </div>
        <ul className="nav-links-nav">
          <li><Link to="/" className="nav-item-nav">Home</Link></li>
          <li><Link to="/book-vehicle" className="nav-item-nav">Book Vehicle</Link></li>
          <li><Link to="/vehicles-tariffs" className="nav-item-nav">Vehicles & Tariffs</Link></li>
          <li><Link to="/about-us" className="nav-item-nav">About Us</Link></li>
        </ul>
        <div className="auth-buttons-nav">
          {isLoggedIn ? (
            <button className="auth-button-nav" onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/sign-in"><button className="auth-button-nav">Sign In | Sign Up</button></Link>
          )}
        </div>
        <div className="profile-icon-nav">
          <img src={profile} alt='profile' />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
