// Payment.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';
import one from './one.png';
import two from './two.png';
import three from './three.png';
import lens from './lens.png';
import filter from './filter.png';
import riding from './riding.png';
import Navbar from '../Navbar/Navbar';

const Payment = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!firstName || !lastName || !number || !email) {
      alert('Please fill in all fields.');
      return;
    }
    navigate('/checkout2', { state: { firstName, lastName, number, email } });
  };

  return (
    <>
      <Navbar />
      <div className="whole-container">
        <div className="first-right">
          <div className="form-container">
            <div className="payment">
              <img className="icon" src={one} alt="Payment" />
              <p>Personal Details</p>
              <div className="line-one"></div>
              <img className="icon" src={two} alt="Address" />
              <p>Address</p>
              <div className="line-one"></div>
              <img className="icon" src={three} alt="Checkout" />
              <p>Checkout</p>
            </div>
            <div className="inputtt">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="button-container">
                <button className="edit-button" onClick={() => { /* Implement edit functionality */ }}>
                  Edit
                </button>
                <button className="continue-button" onClick={handleContinue}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="second-right">
          <h2 className="book">Book your rental within minutes!</h2>
          <div className="color">
            <img className="lens" src={lens} alt="Lens" />
            <div className="riight">
              <h2>1. Search</h2>
              <p>Enter your location to get real-time information about the rentals.</p>
            </div>
          </div>
          <div className="color">
            <img className="lens" src={filter} alt="Filter" />
            <div className="riight">
              <h2>2. Filter</h2>
              <p>Filter your results based on vehicle types, fuel, and price.</p>
            </div>
          </div>
          <div className="color">
            <img className="lens" src={riding} alt="Riding" />
            <div className="riight">
              <h2>3. Book & Ride</h2>
              <p>Book your rental within minutes and ride to your destination.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
