import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef("");
  const navigate = useNavigate();
  let errorElement;
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
] = useSignInWithEmailAndPassword(auth);
if(user){
  navigate('/home')
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
    return (
        <div>
            <div className='container mx-auto w-100 border border-2 p-5 rounded-3'>
                <div className='row'>
               <div className='col-lg-6'>
              
               </div>
               <div className='col-lg-6'>
                 <h1 className='mb-4 text-center' >Login</h1>
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
 <p className='d-flex align-items-center mb-2' >Forgot password?<Button className='text-decoration-none text-warning' variant="link">Reset password</Button> </p> 
  <p className='mt-3 text-center'>New in cineSpark? <Link to="/register" className='text-primary pe-auto text-decoration-none' >Register now</Link></p>
    <div className='d-flex justify-content-center align-items-center'>
    <div className='w-25' ><hr /></div>
    <p className='m-3 '>or more ways</p>
    <div className='w-25' ><hr /></div>
    </div>
    
    <div className='d-flex align-items-center '>
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