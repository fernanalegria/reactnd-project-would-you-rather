import React, { Component, Fragment } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Alert from 'react-bootstrap/Alert';
import BaseContainer from '../../common/BaseContainer';
import './login.scss';

class LoginPage extends Component {
  state = {
    register: false,
    created: null
  };

  toggleForm = register => {
    this.setState({
      register
    });
  };

  onUserCreated = created => {
    this.setState({
      register: !created,
      created
    });
  };

  onCloseAlert = () => {
    this.setState({
      created: null
    });
  };

  render() {
    const { register, created } = this.state;

    return (
      <Fragment>
        <Alert
          dismissible
          variant="success"
          show={created === true}
          onClose={this.onCloseAlert}
        >
          <Alert.Heading>Congrats!</Alert.Heading>
          <p>
            Your user was created successfully. Now you can log safely into the
            app.
          </p>
        </Alert>
        <Alert
          dismissible
          variant="warning"
          show={created === false}
          onClose={this.onCloseAlert}
        >
          <p>
            Sorry, that username already exists in our database. Try with
            another one.
          </p>
        </Alert>
        <BaseContainer align="center">
          <Card className="card-login">
            <Card.Header>
              <Nav variant="tabs" className="nav-justified">
                <Nav.Item>
                  <Nav.Link
                    className={`nav-link w-100 ${!register && 'active'}`}
                    onClick={() => this.toggleForm(false)}
                  >
                    Log in
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    className={`nav-link w-100 ${register && 'active'}`}
                    onClick={() => this.toggleForm(true)}
                  >
                    Sign up
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              {this.state.register ? (
                <SignUpForm onUserCreated={this.onUserCreated} />
              ) : (
                <LoginForm />
              )}
            </Card.Body>
          </Card>
        </BaseContainer>
      </Fragment>
    );
  }
}

export default LoginPage;
