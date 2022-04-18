import React ,{useState,useEffect}from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../../Hook/useServicehook';
import Service from '../Service/Service';

const Services = () => {
    const {services} = useServices();
    
    return (
        <div>  
            <h1 className='text-center my-5 '  >My services</h1>
            <Row xs={1} md={2} lg={3} className="container g-3 mx-auto">
                {
                    services.map(service =><Service
                    key={service.id}
                    service = {service}
                    ></Service>)
                }
            </Row>
            </div>
            
        
    );
};

export default Services;