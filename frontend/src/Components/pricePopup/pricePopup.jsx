import React from "react";
import './pricePopup.css';

const PricePopup = ({ onClose }) => {
    return (
        <div className="priceDiv">
            <h1>Duration and Prices</h1>
            <h2>Based on current standards *</h2>
            <div className="durLists">
                <div className="durList">8 hrs - ₹200 / hr</div>
                <div className="durList">16 hrs - ₹180 / hr</div>
                <div className="durList">1 day - ₹150 / hr</div>
                <div className="durList">More than 2 days - ₹100 / hr</div>
                <button onClick={onClose}>Okay</button>
            </div>
        </div>
    );
};

export default PricePopup;
