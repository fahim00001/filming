import React from 'react';
import notFoundImage from '../../../images/pagenotFound.gif'
import './NotFound.css';
const NotFound = () => {
    return (
        <div className='vh-100 notFound-container'>
            
            <img className='img-fluid' src={notFoundImage} alt="" srcset="" />
        </div>
    );
};

export default NotFound;