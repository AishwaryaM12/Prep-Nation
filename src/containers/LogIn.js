import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './SignUp.css';

function LogIn() {
  return (
    <div className="Signup">
      <div className="Signup-container">
        <h1 className="font"><a href="/">Prep-Nation</a></h1>
        <h2 className="App-link"> LogIn </h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Your Password" />
          </Form.Group>
          <h5>
            Create New Account? Click to <a href="/signUp" className="App-link">SignUp</a>.
    </h5>
          <br />
          <div className="tc">
            <Button variant="danger" type="submit">
              Submit
    </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default LogIn;