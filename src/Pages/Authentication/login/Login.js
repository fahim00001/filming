import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef("");
   
    return (
        <div>
            <div className='container mx-auto w-100 border border-2 p-5 rounded-3'>
                <div className='row'>
               <div className='col-lg-6'>
              
               </div>
               <div className='col-lg-6'>
               <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
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
    <button type="submit">Google signIn</button>
    
                </Form>
               </div>
                </div>
                
            </div>
         
        </div>
    );
};

export default Login;