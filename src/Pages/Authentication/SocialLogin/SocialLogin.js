import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import googleIcon from '../../../images/icon/googleIcon.png'
import facebookIcon from '../../../images/icon/Facebookicon.png'
import githubIcon from '../../../images/icon/github.jpg'
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    
    if(error){
        errorElement =<p className='text-danger'>Error: {error?.message}</p>
    }
    if(user){
        navigate('/home');
    }
    return (
        <>
                   <div className='d-flex align-items-center justify-content-evenly' > 
                   <button
                    onClick={() => signInWithGoogle()}
                    className='my-3 w-25 custom-btn d-block mx-auto' type="submit"><img className='mx-2'  width={25} src={googleIcon} alt="" srcset="" />  </button>
                    <button className='my-3 w-25 custom-btn d-block mx-auto' type="submit"><img className='mx-2'  width={25} src={facebookIcon} alt="" srcset="" />  </button>
                    <button className='my-3  custom-btn d-block mx-auto' type="submit"><img className='mx-2'  width={60} src={githubIcon} alt="" srcset="" /> </button>
                   </div>
                    <div className='text-center' >
                     {errorElement}
                    </div>
        </>
    );
};

export default SocialLogin;