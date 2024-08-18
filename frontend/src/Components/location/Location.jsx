import React, { useState } from 'react';
import './RentalVehicles.css';
import car from './car1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import bike from './bike.svg';
import cars from './cars.png';
import cycle from './cycle.png';
import care from './care.svg';
import { useNavigate } from 'react-router-dom';

const RentalVehicles = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('');
    const navigate = useNavigate();

    const isAuthenticated = () => !!localStorage.getItem('token');

    const handleDropdownSelect = (location) => {
        setSelectedLocation(location);
        if (isAuthenticated()) {
            navigate('/car-rental', { state: { location } });
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="rental-whole">
            <div className="rental-container">
                <div className="rental-white-section">
                    <h1>Book your Vehicles</h1>
                    <p className="rental-subheading">Any type. Any time. Anywhere.</p>
                    <p className="rental-light-text">Find vehicles near you</p>

                    <div className="rental-input-container">
                        <FontAwesomeIcon icon={faLocationDot} className="rental-icon" />
                        <input
                            type="text"
                            className="rental-input"
                            placeholder="Select your Location"
                            value={selectedLocation}
                            onClick={() => setShowDropdown(!showDropdown)}
                        />
                        {showDropdown && (
                            <div className="rental-dropdown">
                                <div className="rental-dropdown-item" onClick={() => handleDropdownSelect('Chennai')}>Chennai</div>
                                <div className="rental-dropdown-item" onClick={() => handleDropdownSelect('Coimbatore')}>Coimbatore</div>
                                <div className="rental-dropdown-item" onClick={() => handleDropdownSelect('Karur')}>Karur</div>
                                <div className="rental-dropdown-item" onClick={() => handleDropdownSelect('Trichy')}>Trichy</div>
                            </div>
                        )}
                    </div>
                </div>

                <img className="rental-cordilla" src={car} alt="car" />
                <div className="rental-black-section"></div>
            </div>

            <div className="rental-second-container">
                <h1>Book your ride today!</h1>
                <p className="rental-subheading">Take advantage of this opportunity to see our latest models!</p>
            </div>

            <div className="rental-listing">
                <div className="rental-first-listing">
                    <h2 className="rental-header">Bikes</h2>
                    <p className="rental-para">"Feel the thrill with our latest bikes. Built for adventure, power, and unbeatable performance, they’re more than a ride—they’re a journey. Ignite your passion and hit the road today!"</p>
                    <img src={bike} alt="bike" />
                </div>

                <div className="rental-first-listing">
                    <h2 className="rental-header">Car</h2>
                    <p className="rental-para">"Experience luxury and performance with our newest car model. Designed for those who crave excellence, it’s not just a drive—it’s a statement. Elevate your journey—explore today!"</p>
                    <img src={care} alt="car" />
                </div>

                <div className="rental-first-listing">
                    <h2 className="rental-header">Cycle</h2>
                    <p className="rental-para">"Discover unmatched freedom with our latest cycle. Built for adventure and comfort, it's not just a ride—it's an experience. Start your journey and explore new paths today!"</p>
                    <img src={cycle} alt="cycle" />
                </div>
            </div>

            <div className="rental-third-container">
                <div className="rental-child1">
                    <h1 className="rental-about-header">About us</h1>
                    <img src={cars} alt="cars" />
                </div>

                <div className="rental-right-container">
                    <div className="rental-right">
                        <h3>Things we provide</h3>
                        <p className="rental-right-para">Description of services.</p>
                    </div>
                    {/* More right containers */}
                </div>
            </div>
        </div>
    );
};

export default RentalVehicles;
