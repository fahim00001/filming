import React from 'react';
import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () =>{
    signOut(auth);
  }
    return (
        <Navbar className='mb-5' sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand className='font-monospace fs-2 fw-bold'as={Link} to="/">CineSpark</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className='ms-auto fs-5 fw-semi-bold'>
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/services">
        Services
      </Nav.Link>
      <Nav.Link as={Link} to="/Blog">Blog</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      {user ?
        <Button className='text-decoration-none text-white' variant="link" onClick={handleSignOut}> SingOut</Button> 
      : <Nav.Link as={Link} to="/login">Login</Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;