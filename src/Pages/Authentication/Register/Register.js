import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile} from 'react-firebase-hooks/auth';
import './Register.css'
import SocialRegister from '../socialRegister/SocialRegister';
const Register = () => {
    const emailRef = useRef("");
    const passwordRef = useRef('');
    const userNameRef = useRef('');
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    console.log(user);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const handleRegister = async(event) =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const UserName = userNameRef.current.value;

        await createUserWithEmailAndPassword(email ,password);
        await updateProfile({displayName:UserName})
        console.log('updated');
        navigate('/home')
    }
    return (
        <div className='container mx-auto w-100 border border-2 p-5 rounded-3'>
            <h1 className='text-center mb-3' >Register</h1>
            <div className='row' >
                <div className='col-12 col-lg-6'>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formUserName">
                            <Form.Label>UserName</Form.Label>
                            <Form.Control ref={userNameRef} type="text" placeholder="Enter Username" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                        <p className='mt-3' >Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' >Please Login</Link> </p>

                    </Form>
                </div>

                <div className=' col-12 col-lg-6 customField-register' >
                    <SocialRegister></SocialRegister>
                </div>
            </div>

        </div>
    );
};

export default Register;