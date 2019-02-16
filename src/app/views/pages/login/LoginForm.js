import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withLastLocation } from 'react-router-last-location';
import { authedUserActions } from '../../../state/ducks/authedUser';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { arrayOf, func } from 'prop-types';
import { userShape } from '../../propTypes';
import { rootUrl } from '../../../../index';

/**
 * Form that lets the user log into the app
 */
class LoginForm extends Component {
  static propTypes = {
    users: arrayOf(userShape).isRequired,
    setAuthedUser: func.isRequired
  };

  state = {
    username: '',
    password: '',
    isInvalid: false
  };

  /**
   * Changes the username according to the user input
   * @param  {Event}
   */
  handleUsernameChange = e => {
    this.setState({
      username: e.target.value,
      isInvalid: false
    });
  };

  /**
   * Changes the password according to the user input
   * @param  {Event}
   */
  handlePasswordChange = e => {
    this.setState({
      password: e.target.value,
      isInvalid: false
    });
  };

  /**
   * Compares the credentials against the existing users in database
   * and logs them in if there's a match
   * @param  {Event}
   */
  handleSubmit = e => {
    e.preventDefault();
    const { users, setAuthedUser, history, lastLocation } = this.props;
    const { username, password } = this.state;
    const user = users.find(
      user => user.name === username && user.password === password
    );
    if (user) {
      setAuthedUser(user.id).then(() => {
        if (
          lastLocation &&
          (lastLocation.pathname.includes(`${rootUrl}/questions`) ||
            lastLocation.pathname.includes(`${rootUrl}/add`) ||
            lastLocation.pathname.includes(`${rootUrl}/leaderboard`))
        ) {
          history.push(lastLocation);
        } else {
          history.push(`${rootUrl}/questions`);
        }
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

export default withLastLocation(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(LoginForm)
  )
);
