import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import './Overview.css'; // Ensure this CSS file is created for styling

const Overview = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    car,
    selectedLocation,
    firstName,
    lastName,
    number,
    email,
    doorNumber,
    city,
    pincode,
    state,
  } = location.state || {};

  const handlePlaceOrder = () => {
    toast.success('Order placed successfully!', {
      onClose: () => {
        setTimeout(() => {
          navigate('/');
        }, 100); // Delay of 1 second
      },
    });
  };

  return (
    <div className="overview-container">
      <h1>Order Overview</h1>
      <div className="overview-section">
        <h2>Personal Details</h2>
        <p><strong>First Name:</strong> {firstName}</p>
        <p><strong>Last Name:</strong> {lastName}</p>
        <p><strong>Number:</strong> {number}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>

      <div className="overview-section">
        <h2>Address</h2>
        <p><strong>Door Number:</strong> {doorNumber}</p>
        <p><strong>City:</strong> {city}</p>
        <p><strong>Pincode:</strong> {pincode}</p>
        <p><strong>State:</strong> {state}</p>
      </div>

      <div className="overview-section">
        <h2>Selected Car</h2>
        <p><strong>Car Name:</strong> {car?.name || 'Hyundai Elite i20 '}</p>
        <p><strong>Type:</strong> {car?.type || 'Diesel'}</p>
        <p><strong>Transmission:</strong> {car?.transmission || 'Manual'}</p>
        <p><strong>Seats:</strong> {car?.seats || '5'}</p>
      </div>

      <div className="overview-section">
        <h2>Location</h2>
        <p><strong>Selected Location:</strong> {selectedLocation || 'Coimbatore'}</p>
      </div>

      <button className="place-order-button" onClick={handlePlaceOrder}>Place Order</button>

      {/* Ensure ToastContainer is included */}
      <ToastContainer />
    </div>
  );
};

export default Overview;
