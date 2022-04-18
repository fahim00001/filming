import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const CheckoutSuccess = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='vh-100'>
            <div className='container  my-5 mx-auto border border-3 text-center rounded-3 p-5'>
            <h1> <span className=' text-warning'>Thankyou</span> for order confirmation</h1>
            <p>Soon i will send you mail  and fixed a meeting</p>
              <p>Have a nice day <span className='text-warning fs-4 fw-bolder' >{user?.displayName}</span></p>
        </div>
        </div>
        
    );
};

export default CheckoutSuccess;