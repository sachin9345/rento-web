import React, { useState } from "react";
import Dropdown from 'react-dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faMotorcycle, faTruck, faBicycle, faSort, faGasPump, faCogs, faUsers } from '@fortawesome/free-solid-svg-icons';
import 'react-dropdown/style.css';
import './filter.css';

const Filter = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSort, setSelectedSort] = useState(null);
    const [selectedFuelType, setSelectedFuelType] = useState(null);
    const [selectedGearType, setSelectedGearType] = useState(null);
    const [selectedSeater, setSelectedSeater] = useState(null);

    const categories = [
        { value: 'Car', label: <><FontAwesomeIcon icon={faCar} /> Car</> },
        { value: 'Motor Bike', label: <><FontAwesomeIcon icon={faMotorcycle} /> Motor Bike</> },
        { value: 'Truck', label: <><FontAwesomeIcon icon={faTruck} /> Truck</> },
        { value: 'Bicycle', label: <><FontAwesomeIcon icon={faBicycle} /> Bicycle</> }
    ];

    const sortingOptions = [
        { value: 'Price: Low to High', label: <><FontAwesomeIcon icon={faSort} /> Price: Low to High</> },
        { value: 'Price: High to Low', label: <><FontAwesomeIcon icon={faSort} /> Price: High to Low</> },
        { value: 'Newest First', label: <><FontAwesomeIcon icon={faSort} /> Newest First</> },
        { value: 'Oldest First', label: <><FontAwesomeIcon icon={faSort} /> Oldest First</> }
    ];

    const fuelTypes = [
        { value: 'Petrol', label: <><FontAwesomeIcon icon={faGasPump} /> Petrol</> },
        { value: 'Diesel', label: <><FontAwesomeIcon icon={faGasPump} /> Diesel</> },
        { value: 'Electric', label: <><FontAwesomeIcon icon={faGasPump} /> Electric</> },
        { value: 'Hybrid', label: <><FontAwesomeIcon icon={faGasPump} /> Hybrid</> }
    ];

    const gearTypes = [
        { value: 'Manual', label: <><FontAwesomeIcon icon={faCogs} /> Manual</> },
        { value: 'Automatic', label: <><FontAwesomeIcon icon={faCogs} /> Automatic</> }
    ];

    const seaters = [
        { value: '2 Seater', label: <><FontAwesomeIcon icon={faUsers} /> 2 Seater</> },
        { value: '4 Seater', label: <><FontAwesomeIcon icon={faUsers} /> 4 Seater</> },
        { value: '6 Seater', label: <><FontAwesomeIcon icon={faUsers} /> 6 Seater</> },
        { value: '8 Seater', label: <><FontAwesomeIcon icon={faUsers} /> 8 Seater</> }
    ];

    const handleSelect = (setter) => (option) => {
        setter(option.value);
        console.log(`Selected: ${option.value}`);
    };

    return (
        <div className="filter">
            <h1>Filters and Sort</h1>
            <p>Results are based on the filters you select here.</p>
            
            <Dropdown 
                options={categories} 
                onChange={handleSelect(setSelectedCategory)} 
                value={selectedCategory}
                placeholder="Categories" 
            />

            <Dropdown 
                options={sortingOptions} 
                onChange={handleSelect(setSelectedSort)} 
                value={selectedSort}
                placeholder="Sort By" 
            />

            <Dropdown 
                options={fuelTypes} 
                onChange={handleSelect(setSelectedFuelType)} 
                value={selectedFuelType}
                placeholder="Fuel Type" 
            />

            <Dropdown 
                options={gearTypes} 
                onChange={handleSelect(setSelectedGearType)} 
                value={selectedGearType}
                placeholder="Gear Type" 
            />

            <Dropdown 
                options={seaters} 
                onChange={handleSelect(setSelectedSeater)} 
                value={selectedSeater}
                placeholder="Seater" 
            />
        </div>
    );
}

export default Filter;
