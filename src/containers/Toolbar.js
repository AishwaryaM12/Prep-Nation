import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import './Toolbar.css';


const toolbar = (props) => (
    <Navbar className="color-nav"  variant="dark">
        <Navbar.Brand className="font" href="#home">PrepNation</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
            <Nav.Link className="fontcolor" href="#deets">Sign-Up</Nav.Link>
            <Nav.Link className="fontcolor" href="#deets">Sign-In</Nav.Link>
        </Nav>
    </Navbar>
);

export default toolbar;