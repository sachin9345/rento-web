import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import CarRental from './Components/Rentallisting/CarRental';
import Fotter from './Components/Fotter/Fotter';
import Booking from './Components/booking/Booking';
import Payment from './Components/Payment/Payment';
import Paymentt from './Components/payment2/payment2';
import Overview from './Components/Overview/Overview';





function App() {
  return (
    <>
    <Router>
      <ToastContainer/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sign-in" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/car-rental" element={<CarRental/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="checkout1" element={<Payment/>} />
        <Route path="/checkout2" element={<Paymentt/>} />
        <Route path="/overview" element={<Overview/>} />

        

        
        
      </Routes>

      <Fotter/>
    </Router>
    </>
  );
}

export default App;
