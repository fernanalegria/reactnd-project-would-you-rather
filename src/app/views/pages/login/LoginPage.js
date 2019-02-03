import React, { Component } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import './login.scss';

class LoginPage extends Component {
  state = {
    register: false
  };

  toggleForm = register => {
    this.setState({
      register
    });
  };

  render() {
    return (
      <Container className="h-100 vertical-center">
        <Row className="w-100">
          <Col md="6" className="col-center">
            <Card className="card-login">
              <Card.Header>
                <Nav
                  variant="tabs"
                  defaultActiveKey="#first"
                  className="nav-justified"
                >
                  <Nav.Item>
                    <Nav.Link
                      className={`nav-link w-100 ${!this.state.register &&
                        'active'}`}
                      onClick={() => this.toggleForm(false)}
                    >
                      Log in
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className={`nav-link w-100 ${this.state.register &&
                        'active'}`}
                      onClick={() => this.toggleForm(true)}
                    >
                      Sign up
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                {this.state.register ? <SignUpForm /> : <LoginForm />}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoginPage;
