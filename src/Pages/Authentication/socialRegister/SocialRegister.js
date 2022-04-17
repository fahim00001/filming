import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import googleIcon from '../../../images/icon/googleIcon.png'
import FacebookIcon from '../../../images/icon/Facebookicon.png'
import githubIcon from '../../../images/icon/github.jpg'

const SocialRegister = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if(error){
        errorElement =<p className='text-danger text-center'>Error: {error?.message}</p>
    }
    if(user){
        navigate('/home');
    }
    return (
        <div className='' >
           <p className='text-center mt-4' >More ways to Register</p>
                    <button
                    onClick={() => signInWithGoogle()}
                    className='my-3 w-75 custom-btn d-block mx-auto' type="submit"><img className='mx-2'  width={25} src={googleIcon} alt="" srcset="" /> <span className='me-3 fw-bold' >Google </span> </button>
                    <button className='my-3 w-75 custom-btn d-block mx-auto' type="submit"><img className='mx-2'  width={25} src={FacebookIcon} alt="" srcset="" /> <span className='me-3 fw-bold' >Facebook </span> </button>
                    <button className='my-3 w-75 custom-btn d-block mx-auto' type="submit"><img className='mx-1'  width={50} src={githubIcon} alt="" srcset="" /> <span className='me-2 fw-bold' >GitHub</span> </button>
                    {errorElement}
        </div>
    );
};

export default SocialRegister;