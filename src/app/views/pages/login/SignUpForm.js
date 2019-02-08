import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SignUpForm extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="signup-username">
          <Form.Control type="text" placeholder="Username" required autoFocus />
          <Form.Label>Username</Form.Label>
        </Form.Group>
        <Form.Group controlId="signup-password">
          <Form.Control type="password" placeholder="Password" required />
          <Form.Label>Password</Form.Label>
        </Form.Group>
        <Form.Group controlId="signup-confirm-password">
          <Form.Control
            type="password"
            placeholder="Confirm password"
            required
          />
          <Form.Label>Confirm password</Form.Label>
        </Form.Group>
        <Button variant="primary" type="submit" size="lg" block>
          Sign up
        </Button>
      </Form>
    );
  }
}

export default SignUpForm;
