import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import BannerimgLogin from '../../../images/camerapicLogin.jpg';
import  './Login.css'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let errorElement;
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
] = useSignInWithEmailAndPassword(auth);

const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

if(loading || sending){
  return <Loading></Loading>
}
if(user){
  navigate(from,{replace: true});
}
if(error){
  errorElement = <p className='text-danger'>Error: {error?.message}</p>
}
const handleLogin = event =>{
  event.preventDefault();
  const email = emailRef.current.value;
  const password = passwordRef.current.value;

  signInWithEmailAndPassword(email,password);

}
  const  handleresetPassword = async () =>{
    const email = emailRef.current.value;
    if(email){
      await sendPasswordResetEmail(email);
      toast('sent email')
    }
    else{
      toast('please enter your email')
    }
  }

    return (
        <div className='my-5'>
            <div className='container mx-auto w-100  p-3  '>
                <div className='row'>
               <div className='col-lg-6'>
                  <img className='img-fluid login-img-custom' src={BannerimgLogin} alt="" srcset="" />
               </div>
               <div className='col-lg-6 border border-2 rounded-3 p-3'>
                 <h1 className='mb-4 text-center text-warning' >Login</h1>
               <Form onSubmit={handleLogin}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
  </Form.Group>
  {errorElement}
  <Button  variant="primary" type="submit">
    Login
  </Button>  
 <p className='d-flex align-items-center mb-2' >Forgot password?<Button className='text-decoration-none text-warning' variant="link" onClick={handleresetPassword}>Reset password</Button> </p> <ToastContainer/>
  <p className='mt-3 text-center'>New in cineSpark? <Link to="/register" className='text-primary pe-auto text-decoration-none' >Register now</Link></p>
    <div className='d-flex justify-content-center align-items-center'>
    <div className='w-25' ><hr /></div>
    <p className='m-3 '>or more ways</p>
    <div className='w-25' ><hr /></div>
    </div>
    
    <div className=' '>
       <SocialLogin></SocialLogin>
    </div>
    
                </Form>
               </div>
                </div>
                
            </div>
         
        </div>
    );
};

export default Login;