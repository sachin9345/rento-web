import React, { useState } from 'react';
import './CarRental.css';
import gear from '../../Assets/Gear.png';
import gas from '../../Assets/Gas.png';
import seats from '../../Assets/Driving.png';
import marker from '../../Assets/Marker.png';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { toast } from 'react-toastify';

const cars = [
  {
    id: 1,
    name: 'Hyundai Elite i20',
    price: 6900,
    duration: '16 hrs',
    rate: 200,
    type: 'Diesel',
    transmission: 'Manual',
    seats: 5,
    image: 'redcar.png',
  },
  // Add other car objects here...
];

const CarRental = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedLocation = location.state?.location || 'Unknown Location';

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleBookClick = (car) => {
    if (!startDate || !endDate) {
      toast.error('Please select both start and end dates.');
      return;
    }

    navigate('/booking', {
      state: {
        location: selectedLocation,
        startDate,
        endDate,
        car,
      },
    });
  };

  return (
    <div className="car-rental">
      <Navbar />
      <Header selectedLocation={selectedLocation} setStartDate={setStartDate} setEndDate={setEndDate} />
      <FilterSection />
      <CarList cars={cars} onBookClick={handleBookClick} />
    </div>
  );
};

const Header = ({ selectedLocation, setStartDate, setEndDate }) => {
  return (
    <header className="header">
      <div className="location-select">
        <div className="location-wrapper">
          <img src={marker} alt="Location" />
          <span className="selected-location">{selectedLocation}</span>
        </div>
        <div className="date-picker">
          <div className="date-wrapper">
            <span className="stend">Start</span>
            <input
              type="datetime-local"
              className="black-background"
              onChange={(e) => setStartDate(e.target.value)}
            />
            <span className="day">Sat</span>
          </div>
          <div className="date-wrapper">
            <span className="stend">End</span>
            <input
              type="datetime-local"
              className="black-background"
              onChange={(e) => setEndDate(e.target.value)}
            />
            <span className="day">Sat</span>
          </div>
        </div>
      </div>
    </header>
  );
};

const FilterSection = () => {
  return (
    <div className="filter-section">
      <span>8 cars are available for your filter</span>
    </div>
  );
};

const CarList = ({ cars, onBookClick }) => {
  return (
    <div className="car-list">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} onBookClick={onBookClick} />
      ))}
    </div>
  );
};

const CarCard = ({ car, onBookClick }) => {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} className="car-image" />
      <div className="car-details">
        <h3>{car.name}</h3>
        <div className="car-info">
          <span>
            <img src={gas} alt="Diesel" />
            {car.type}
          </span>
          <span>
            <img src={gear} alt="Manual" />
            {car.transmission}
          </span>
          <span>
            <img src={seats} alt="Seats" />
            {car.seats} Seater
          </span>
        </div>
        <div className="car-footer">
          <p className="car-price">₹{car.price}</p>
          <button className="book-button" onClick={() => onBookClick(car)}>BOOK</button>
        </div>
        <p className="car-duration">Duration: {car.duration} ₹{car.rate}/hr</p>
      </div>
    </div>
  );
};

export default CarRental;
