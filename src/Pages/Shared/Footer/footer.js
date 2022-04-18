import React from 'react';
import './Footer.css'
import { faCoffee, faEnvelope, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const footer = () => {
    return (
        <div className='footer-container d-md-flex justify-content-md-around' >
            
            
                <div className=''>
                  <h3>CineSpark</h3>  
                 <p>About</p>
                </div>

                <div className=''>
                    <p><FontAwesomeIcon icon={faMapLocation} /> bonani,dokkinKhan,Dhaka</p>
                    <p><FontAwesomeIcon icon={faPhone} /> ++01456851835</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> cinespark099@gmail.com</p>
                </div>
                
            
            
        </div>
    );
};

export default footer;