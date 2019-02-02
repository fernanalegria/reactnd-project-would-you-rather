import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authedUserActions } from '../../../state/ducks/authedUser';

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
      <form onSubmit={this.handleSubmit}>
        <div className="form-label-group">
          <input
            id="login-username"
            type="text"
            className={`form-control ${isInvalid && 'invalid-field'}`}
            placeholder="Username"
            required
            autoFocus
            value={username}
            onChange={this.handleUsernameChange}
          />
          <label htmlFor="login-username">Username</label>
        </div>
        <div className="form-label-group">
          <input
            id="login-password"
            type="password"
            className={`form-control ${isInvalid && 'invalid-field'}`}
            placeholder="Password"
            required
            value={password}
            onChange={this.handlePasswordChange}
          />
          <label htmlFor="login-password">Password</label>
        </div>
        <div className={`invalid-feedback ${isInvalid && 'show-invalid'}`}>
          Invalid username or password
        </div>
        <div className="checkbox mb-3">
          <input type="checkbox" value="remember-me" /> Remember me
        </div>
        <button
          className="btn btn-lg btn-primary btn-block"
          type="submit"
          disabled={!username || !password}
        >
          Sign in
        </button>
      </form>
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
