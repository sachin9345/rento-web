// Paymentt.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './payment2.css';
import one from './one norm.png';
import two from './two bold.png';
import three from './three.png';
import logo from './logo.svg';
import lens from './lens.png';
import filter from './filter.png';
import riding from './riding.png';

const Paymentt = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { firstName, lastName, number, email } = location.state || {};

  const [doorNumber, setDoorNumber] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [saveAddress, setSaveAddress] = useState(false);

  const handleCheckboxChange = () => {
    setSaveAddress(prevState => !prevState);
  };

  const handleContinue = () => {
    if (!doorNumber || !city || !pincode || !state) {
      alert('Please fill in all address fields.');
      return;
    }
    navigate('/overview', {
      state: {
        firstName,
        lastName,
        number,
        email,
        doorNumber,
        city,
        pincode,
        state,
      }
    });
  };

  return (
    <div className="whole-container-payment2">
      <img className="logo-payment2" src={logo} alt="logo" />
      <div className="first-right-payment2">
        <div className="form-container-payment2">
          <div className="payment-payment2">
            <img className="icon-payment2" src={one} alt="Payment" />
            <p>Personal Details</p>
            <div className="line-one-payment2"></div>
            <img className="icon-payment2" src={two} alt="Address" />
            <p>Address</p>
            <div className="line-one-payment2"></div>
            <img className="icon-payment2" src={three} alt="Checkout" />
            <p>Checkout</p>
          </div>
          <div className="inputtt-payment2">
            <label htmlFor="doorNumber">Door Number</label>
            <input
              type="text"
              id="doorNumber"
              value={doorNumber}
              onChange={(e) => setDoorNumber(e.target.value)}
            />

            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <label htmlFor="pincode">Pincode</label>
            <input
              type="text"
              id="pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />

            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="checkbox-container-payment2" onClick={handleCheckboxChange}>
            <input
              type="checkbox"
              id="saveAddress"
              checked={saveAddress}
              readOnly
            />
            <div className="custom-checkbox" />
            <label className="checkbox-label" htmlFor="saveAddress">Save address</label>
          </div>
          <div className="button-container-payment2">
            <button className="continue-button-payment2" onClick={handleContinue}>
              Continue
            </button>
          </div>
        </div>
      </div>
      <div className="second-right-payment2">
        <h2 className="book-payment2">Book your rental within minutes!</h2>
        <div className="color-payment2">
          <img className="lens-payment2" src={lens} alt="Lens" />
          <div className="riight-payment2">
            <h2>1. Search</h2>
            <p>Enter your location to get real-time information about the rentals.</p>
          </div>
        </div>
        <div className="color-payment2">
          <img className="lens-payment2" src={filter} alt="Filter" />
          <div className="riight-payment2">
            <h2>2. Filter</h2>
            <p>Filter your results based on vehicle types, fuel, and price.</p>
          </div>
        </div>
        <div className="color-payment2">
          <img className="lens-payment2" src={riding} alt="Riding" />
          <div className="riight-payment2">
            <h2>3. Book & Ride</h2>
            <p>Book your rental within minutes and ride to your destination.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paymentt;
