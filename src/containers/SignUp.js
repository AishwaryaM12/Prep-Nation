import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './SignUp.css';

function SignUp() {
  return (
    <div className="Signup">
      <div className="Signup-container">
        <h1 className="font"><a href="/">Prep-Nation</a></h1>
        <h2 className="App-link"> Sign Up </h2>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
    </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Mobile Number" />
            <Form.Text className="text-muted">
              It should be 10 digits.
    </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Your Password" />
          </Form.Group>
          <h5>
            Already Regitered? Click to <a href="/logIn" className="App-link">Login</a>.
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

export default SignUp;