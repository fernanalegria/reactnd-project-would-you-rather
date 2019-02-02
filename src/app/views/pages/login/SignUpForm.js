import React, { Component } from 'react';

class SignUpForm extends Component {
  render() {
    return (
      <form>
        <div className="form-label-group">
          <input
            id="signup-username"
            type="text"
            className="form-control"
            placeholder="Username"
            required
            autoFocus
          />
          <label htmlFor="signup-username">Username</label>
        </div>
        <div className="form-label-group">
          <input
            id="signup-password"
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />
          <label htmlFor="signup-password">Password</label>
        </div>
        <div className="form-label-group">
          <input
            id="signup-confirm-password"
            type="password"
            className="form-control"
            placeholder="Confirm password"
            required
          />
          <label htmlFor="signup-confirm-password">Confirm password</label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign up
        </button>
      </form>
    );
  }
}

export default SignUpForm;
