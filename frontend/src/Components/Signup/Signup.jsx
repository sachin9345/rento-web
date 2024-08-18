import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signup.css';
import rentoLogo from './logo.svg';
import car from './white.png';
import eyeOpen from './eyeOpen.png';
import eyeClose from './eyeClose.png';
import fbicon from './fb.png';
import mailicon from './mail.png';
import xicon from './x.png';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('');
    const [mobile, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            toast.error('Passwords do not match!', {
                position: toast.POSITION.TOP_RIGHT
            });
            return;
        }

        try {
            const response = await axios.post('https://hackathon-wny1.vercel.app/api/v1/register', {
                name,
                mobile,
                email,
                password
            });

            if (response.data.success) {
                toast.success('Successfully signed up!', {
                  
                });

               
                setTimeout(() => {
                    navigate('/login');
                }, 1500); 
            } else {
                toast.error('Sign-up failed. Please try again.', {
                    
                });
            }
        } catch (error) {
            toast.error('An error occurred during sign-up. Please try again.', {
              
            });
        }
    };

    return (
        <div className="whole-sign">
            <ToastContainer />
            <div className="logo-container-sign">
                <div className="logo-sign">
                   <Link to="/"><img src={rentoLogo} alt="Rento" className="logo-img-sign" /></Link> 
                </div>
                <div className="blackcontainer-sign"></div>
            </div>
            <div className="container-sign">
                <div className="white-section-sign">
                    <div className="login-sign">
                        <div className="login-content-sign">
                            <p>Hello!</p>
                            <h1>Sign up</h1>

                            <div className="input-name-sign">
                                <input 
                                    type="text" 
                                    placeholder="Name" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="input-num-sign">
                                <input 
                                    type="text" 
                                    placeholder="Mobile Number" 
                                    value={mobile}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                />
                            </div>
                            <div className="input-mail-sign">
                                <input 
                                    type="text" 
                                    placeholder="Email Address" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="password-sign">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="password-input-sign"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button className="eye-button-sign" onClick={togglePasswordVisibility}>
                                    <img
                                        src={showPassword ? eyeOpen : eyeClose}
                                        alt={showPassword ? "Hide Password" : "Show Password"}
                                        className="eye-icon-sign"
                                    />
                                </button>
                            </div>

                            <div className="confirm-password-sign">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="confirm-password-input-sign"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <button className="eye-button-sign" onClick={togglePasswordVisibility}>
                                    <img
                                        src={showPassword ? eyeOpen : eyeClose}
                                        alt={showPassword ? "Hide Password" : "Show Password"}
                                        className="eye-icon-sign"
                                    />
                                </button>
                            </div>

                            <button className="signin-button-sign" onClick={handleSignup}>Sign up</button>
                            <p>or sign up with</p>
                        </div>

                        <div className="loginmodes-sign">
                            <div className="icon-div-sign">
                                <img src={mailicon} alt="mail" className="login-icon-sign" />
                            </div>
                            <div className="icon-div-sign">
                                <img src={fbicon} alt="fb" className="login-icon-sign" />
                            </div>
                            <div className="icon-div-sign">
                                <img src={xicon} alt="x" className="login-icon-sign" />
                            </div>
                        </div>

                        <p className="signup-sign">Already a member? <Link to="/login"><span>Sign in</span></Link></p>
                    </div>
                </div>

                <img className="cordilla-sign" src={car} alt="car" />
                <div className="black-section-sign"></div>
            </div>
        </div>
    );
};

export default Signup;
