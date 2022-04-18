import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='vh-100 d-flex align-items-center justify-content-center'>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;