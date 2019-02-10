import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authedUserActions } from '../../../state/ducks/authedUser';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isInvalid: false
  };

  handleUsernameChange = e => {
    this.setState({
      username: e.target.value,
      isInvalid: false
    });
  };

  handlePasswordChange = e => {
    this.setState({
      password: e.target.value,
      isInvalid: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { users, setAuthedUser, history } = this.props;
    const user = users.find(
      user =>
        user.name === this.state.username &&
        user.password === this.state.password
    );
    if (user) {
      setAuthedUser(user.id).then(() => {
        history.push('/questions');
      });
    } else {
      this.setState({
        isInvalid: true
      });
    }
  };

  render() {
    const { username, password, isInvalid } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="login-username">
          <Form.Control
            type="text"
            className={isInvalid ? 'invalid-field' : ''}
            placeholder="Username"
            required
            autoFocus
            value={username}
            onChange={this.handleUsernameChange}
          />
          <Form.Label>Username</Form.Label>
        </Form.Group>
        <Form.Group controlId="login-password">
          <Form.Control
            type="password"
            className={isInvalid ? 'invalid-field' : ''}
            placeholder="Password"
            required
            value={password}
            onChange={this.handlePasswordChange}
          />
          <Form.Label>Password</Form.Label>
          <Form.Control.Feedback
            type="invalid"
            className={isInvalid ? 'show-invalid' : ''}
          >
            Invalid username or password
          </Form.Control.Feedback>
        </Form.Group>
        <div className="mb-3">
          <Form.Check type="checkbox" label="Remember me" />
        </div>
        <Button
          variant="primary"
          type="submit"
          disabled={!username || !password}
          size="lg"
          block
        >
          Sign in
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users: Object.values(users)
});

const mapDispatchToProps = {
  setAuthedUser: id => authedUserActions.handleSetAuthedUser(id)
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm)
);
