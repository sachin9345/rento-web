import React, { useState } from 'react';
import './Payment3.css'; // Updated path to payment3.css
import one from './one norm.png'; // Update path as needed
import two from './two.png'; // Update path as needed
import three from './three bold.png'; // Update path as needed
import logo from './logo.svg';
import lens from './lens.png';
import filter from './filter.png';
import riding from './riding.png';

const Payment3 = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [saveAddress, setSaveAddress] = useState(false);

  const handleEdit = () => {
    // Edit functionality
  };

  const handleContinue = () => {
    // Continue functionality
  };

  const handleCheckboxChange = () => {
    setSaveAddress(prevState => !prevState); // Toggle checkbox state
  };

  return (
    <div className="whole-container-payment3">
      <img className="logo-payment3" src={logo} alt="logo" />
      <div className="first-right-payment3">
        <div className="form-container-payment3">
          <div className="payment-payment3">
            <img className="icon-payment3" src={one} alt="Payment" />
            <p>Personal Details</p>
            <div className="line-one-payment3"></div>
            <img className="icon-payment3" src={two} alt="Address" />
            <p>Address</p>
            <div className="line-one-payment3"></div>
            <img className="icon-payment3" src={three} alt="Checkout" />
            <p>Checkout</p>
          </div>
        </div>
      </div>
      <div className="second-right-payment3">
        <h2 className="book-payment3">Book your rental within minutes!</h2>
        <div className="color-payment3">
          <img className="lens-payment3" src={lens} alt="Lens" />
          <div className="riight-payment3">
            <h2>1. Search</h2>
            <p>Enter your location to get real-time information about the rentals.</p>
          </div>
        </div>
        <div className="color-payment3">
          <img className="lens-payment3" src={filter} alt="Filter" />
          <div className="riight-payment3">
            <h2>2. Filter</h2>
            <p>Filter your results based on vehicle types, fuel, and price.</p>
          </div>
        </div>
        <div className="color-payment3">
          <img className="lens-payment3" src={riding} alt="Riding" />
          <div className="riight-payment3">
            <h2>3. Book & Ride</h2>
            <p>Book your rental within minutes and ride to your destination.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment3;
