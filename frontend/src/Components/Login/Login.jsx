import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';
import rentoLogo from './logo.svg'; // Adjust the path as necessary
import car from './white.png';
import fbicon from './fb.png';
import mailicon from './mail.png';
import xicon from './x.png';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://hackathon-zuru.vercel.app/api/v1/login', {
        email,
        password
      });

      if (response.data.success) {
        toast.success('Successfully logged in!');
        // Store token in local storage or context
        localStorage.setItem('token', response.data.token);
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        toast.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      toast.error('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="login-whole">
      <ToastContainer />
      <div className="login-logo-container">
        <div className="login-logo">
          <Link to="/"><img src={rentoLogo} alt="Rento" className="login-logo-img" /></Link>
        </div>
        <div className="login-blackcontainer"></div>
      </div>
      <div className="login-container">
        <div className="login-white-section">
          <div className="login-login">
            <div className="login-login-content">
              <p>Welcome Back!</p>
              <h1>Sign in</h1>
              <div className="login-input-user">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="login-password">
                <input
                  type="password"
                  className="login-password-input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="login-signin-button" onClick={handleLogin}>Sign in</button>
              <p>or sign in with</p>
            </div>
            <div className="login-loginmodes">
              <div className="login-icon-div">
                <img src={mailicon} alt="mail" className="login-login-icon" />
              </div>
              <div className="login-icon-div">
                <img src={fbicon} alt="fb" className="login-login-icon" />
              </div>
              <div className="login-icon-div">
                <img src={xicon} alt="x" className="login-login-icon" />
              </div>
            </div>
            <p className="login-signup">New to Rento?<Link to="/sign-in"><span>Sign up</span></Link></p>
          </div>
        </div>
        <img className="login-cordilla" src={car} alt="car" />
        <div className="login-black-section"></div>
      </div>
    </div>
  );
};

export default Login;
