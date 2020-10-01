import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import './Toolbar.css';


const toolbar = (props) => (
    <Navbar className="color-nav"  variant="dark">
        <Navbar.Brand className="font" href="/">PrepNation</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
            <Nav.Link className="fontcolor" href="/signUp">Register</Nav.Link>
            <Nav.Link className="fontcolor" href="/logIn">Sign-In</Nav.Link>
        </Nav>
    </Navbar>
);

export default toolbar;