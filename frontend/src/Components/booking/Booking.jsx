import React, { useState } from 'react';
import driving from './Driving.png';
import gear from './Gear.png';
import gas from './gas.png';
import inova from './redcar.png'; // Ensure the image filename matches the actual file
import './Booking.css';
import terms from './terms.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faLocationDot, faWallet, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Navbar/Navbar';
import PricePopup from '../pricePopup/pricePopup';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { car, startDate, endDate } = location.state || {};
  const [isDoorDelivery, setIsDoorDelivery] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = (option) => {
    setIsDoorDelivery(option === 'door-delivery');
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleBookClick = () => {
    if (!startDate || !endDate) {
      toast.error('Please select both start and end dates.');
      return;
    }
    // Navigate to payment page
    navigate('/checkout1', {
      state: {
        car,
        startDate,
        endDate,
        isDoorDelivery,
      },
    });
  };

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <>
      <Navbar />
      <div className='book-booking-container'>
        <div className="book-left-section">
          <div className="book-car-size">
            <img className='book-inova' src={inova} alt='car' />
          </div>
          <div className="book-words">
            <h2 className='black'>{car?.name || 'Car Name'}</h2>
            <div className="book-flex">
              <div className="book-single">
                <img src={driving} alt="Driving icon" />
                <p>{car?.seats || '5'} seater</p>
              </div>
              <div className="book-single">
                <img src={gas} alt="Gas icon" />
                <p>{car?.type || 'Type'}</p>
              </div>
              <div className="book-single">
                <img src={gear} alt="Gear icon" />
                <p>{car?.transmission || 'Transmission'}</p>
              </div>
            </div>
          </div>
          <button className='book-sandy'>More info</button>
        </div>

        <div className="book-right-side">
          <div className="book-centre-items">
            <div className="book-switch-container">
              <div className={`book-switch ${isDoorDelivery ? 'book-door-delivery' : 'book-pick-up'}`}>
                <div className="book-switch-option" onClick={() => handleClick('door-delivery')}>
                  Door Delivery
                </div>
                <div className="book-switch-option" onClick={() => handleClick('pick-up')}>
                  Pick Up
                </div>
                <div className="book-switch-toggle"></div>
              </div>
            </div>
            <h2>{car?.name || 'Car Name'}</h2>
          </div>

          <div className="book-wat">
            <div className="book-something">
              <h2>Total Price</h2>
              <h4>Inclusive of Taxes</h4>
            </div>
            <div className="book-some">
              <h2>₹ 1298.98</h2>
              <h4 className='blue'>2 days - ₹100/hr</h4>
            </div>
          </div>

          <div className="book-buttons">
            <button className="book-styled-button" onClick={handleBookClick}>
              <FontAwesomeIcon icon={faCartShopping} className="icon" />
              Book
            </button>
            <button className="book-styled-button">
              <FontAwesomeIcon icon={faLocationDot} className="icon" />
              See location
            </button>
            <button className="book-styled-button" onClick={togglePopup}>
              <FontAwesomeIcon icon={faWallet} className="icon" />
              View prices
            </button>
          </div>

          <div className="book-date">
            <div className="date-wrapper">
              <label>Start Date:</label>
              <input 
                type='datetime-local' 
                className='book-date-input' 
                value={startDate || ''}
                readOnly
              />
            </div>
            <div className="date-wrapper">
              <label>End Date:</label>
              <input 
                type='datetime-local' 
                className='book-date-input' 
                value={endDate || ''}
                readOnly
              />
            </div>
          </div>

          <ul className="book-date-edit-list">
            <li><a href="./">Edit date</a></li>
          </ul>

          <div className="book-flexxx">
            <img src={terms} alt='Terms and Conditions' />
            <p>Read terms and conditions</p>
          </div>
        </div>

        <div className="book-small-back-button-container">
          <button className="book-small-back-button" onClick={handleBackClick}>
            <FontAwesomeIcon icon={faArrowLeft} className="icon" />
            Back
          </button>
        </div>
      </div>
      {showPopup && <PricePopup onClose={closePopup} />} 
    </>
  );
};

export default Booking;
