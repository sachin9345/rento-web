import React from 'react'
//import CarRental from '../Rentallisting/CarRental'

import Navbar from '../Navbar/Navbar'
import { ToastContainer } from 'react-toastify'
import RentalVehicles from '../location/Location'

const Home = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <RentalVehicles/>
      
    </div>
  )
}

export default Home
