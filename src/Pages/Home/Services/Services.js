import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React ,{useState,useEffect}from 'react';
import { Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import useServices from '../../../Hook/useServicehook';
import Service from '../Service/Service';
import Footer from '../../Shared/Footer/footer';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Services = () => {
    const {services} = useServices();
    const {pathname} = useLocation();
    
    return (
        <div>  
            <div className='my-5'>
            <h1 className='text-center my-5 '  >My <span className='text-warning'>services</span></h1>
            <Row xs={1} md={2} lg={3} className="container g-3 mx-auto">
                { pathname.includes('service')?
                     services.map(service =><Service
                        key={service.id}
                        service = {service}
                        ></Service>): services.slice(0,3).map(service =><Service
                            key={service.id}
                            service = {service}
                            ></Service>)
                }
                
            </Row>
            </div>
               { pathname.includes('service') ?
                   " ":<div className='d-flex justify-content-center my-5' >
                   <Link className=' text-decoration-none text-warning fw-bolder fs-5' to='/services'><p>See more <FontAwesomeIcon   icon={faArrowRight} /> </p>  </Link>
               </div>
               } 
               
            </div>
            
            
        
    );
};

export default Services;