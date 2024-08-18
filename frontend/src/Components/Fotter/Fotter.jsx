import React from 'react'
import logo from './logo.svg'
import face from './Path.png'
import twitter from './twitter.png'
import insta from './instagram.png'
import './Fotter.css'
const Fotter = () => {
  return (
    <div>
        <div className="foot-whole">
            <div className="foot-top">
                <div className="foot-listone">
                    <h2>Quick links</h2>
                    <p>Home</p>
                    <p>Terms and condition</p>
                    <p>FAQ</p>
                </div>
                <div className="foot-listtwo">
                    <h2>Legal Links</h2>
                    <p>Terms & conditions</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                </div>

                <div className="foot-listthree">
                    <h2>Operating hours</h2>
                    <p>Mon-Fri : 9 am - 9 pm</p>
                    <p>Sat-Sun  :10 am - 4 pm</p>
                    
                </div>
                <div className="foot-listfour">
                    <h2>Quick links</h2>
                    <p>About us</p>
                    <p>Partners</p>
                    <p>Customers</p>
                    <p>Contact us</p>
                </div>
            </div>
            <div className="foot-bottom">
            <img className='image-foot' src={logo} alt='logo'/>
            <p className='foot-para'>© 2022 ABC. All rights reserved. </p>
            <div className="foor-flex">
            <img src={insta} alt='logo'/>
            <img src={twitter} alt='logo'/>
            <img src={face} alt='logo'/>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Fotter
