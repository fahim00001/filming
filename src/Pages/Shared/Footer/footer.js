import React from 'react';
import './Footer.css'
import {  faEnvelope, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const footer = () => {
    return (
        <div className='footer-container d-md-flex justify-content-md-evenly aling-items-md-center' >
            
            
                <div className=''>
                  <h3>CineSpark</h3>  
                  <h5 className='text-warning' >About</h5>
                  <p className='cs-about me-5'>I'm a full time video editor.I love to edit videos.
                     IT's my full time<br/>  job so no need worrie . I worked a lot project and i have <br/>experieced around 5 years.
                      I believe on quality not quantity .</p> 


                </div>

                <div className='fs-5'>
                    <p><FontAwesomeIcon className='mx-2' icon={faMapLocation} /> bonani,dokkinKhan,Dhaka</p>
                    <p><FontAwesomeIcon className='mx-2' icon={faPhone} /> +08801456851835</p>
                    <p><FontAwesomeIcon className='mx-2' icon={faEnvelope} /> cinespark099@gmail.com</p>
                </div>
                
            
            
        </div>
    );
};

export default footer;