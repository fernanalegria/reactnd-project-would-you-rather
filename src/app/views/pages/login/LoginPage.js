import React, { Component } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
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
      <div className="container h-100 vertical-center">
        <div className="row w-100">
          <div className="col-md-6 col-center">
            <div className="card card-login">
              <div className="card-header">
                <div className="row">
                  <ul className="nav nav-tabs nav-justified w-100">
                    <li className="nav-item">
                      <button
                        className={`nav-link w-100 ${!this.state.register &&
                          'active'}`}
                        onClick={() => this.toggleForm(false)}
                      >
                        Log in
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link w-100 ${this.state.register &&
                          'active'}`}
                        onClick={() => this.toggleForm(true)}
                      >
                        Sign up
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                {this.state.register ? <SignUpForm /> : <LoginForm />}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
