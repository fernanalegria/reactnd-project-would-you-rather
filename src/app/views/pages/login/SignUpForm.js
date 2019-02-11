import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserAvatar from '../../common/UserAvatar';
import { connect } from 'react-redux';
import { userActions } from '../../../state/ducks/users';

class SignUpForm extends Component {
  state = {
    avatarURL: '',
    username: '',
    password: '',
    confirmPassword: '',
    invalidFile: false,
    isInvalid: false
  };

  onImageUpload = e => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
        this.setState({
          invalidFile: true
        });
      } else {
        this.setState({
          avatarURL: URL.createObjectURL(file),
          invalidFile: false
        });
      }
    }
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

  handleConfirmPasswordChange = e => {
    this.setState({
      confirmPassword: e.target.value,
      isInvalid: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { password, confirmPassword, username, avatarURL } = this.state;
    const { addUser, onUserCreated, users } = this.props;
    if (password !== confirmPassword) {
      this.setState({
        isInvalid: true
      });
    } else {
      const user = Object.values(users).find(user => user.name === username);
      if (user) {
        onUserCreated(false);
      } else {
        addUser(username, password, avatarURL).then(() => {
          onUserCreated(true);
        });
      }
    }
  };

  render() {
    const {
      avatarURL,
      username,
      password,
      confirmPassword,
      invalidFile,
      isInvalid
    } = this.state;
    return (
      <Form
        onSubmit={this.handleSubmit}
        className="form-inline justify-content-center"
      >
        <Form.Group controlId="profile-pic" className="profile-pic text-center mb-2">
          <UserAvatar url={avatarURL} className="mb-2 mx-2" />
          <Form.Control
            type="file"
            accept="image/png, image/jpeg"
            onChange={this.onImageUpload}
          />
          <Form.Label className="p-2 mx-2 font-weight-normal">
            <FontAwesomeIcon icon="upload" /> Choose an image
          </Form.Label>
          <Form.Control.Feedback
            type="invalid"
            className={invalidFile ? 'show-invalid' : ''}
          >
            Please provide a valid image file.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="signup-username" className="w-100">
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={this.handleUsernameChange}
            className="w-100"
            required
            autoFocus
          />
          <Form.Label>Username</Form.Label>
        </Form.Group>
        <Form.Group controlId="signup-password" className="w-100">
          <Form.Control
            type="password"
            placeholder="Password"
            required
            className={`w-100 ${isInvalid ? 'invalid-field' : ''}`}
            value={password}
            onChange={this.handlePasswordChange}
          />
          <Form.Label>Password</Form.Label>
        </Form.Group>
        <Form.Group controlId="signup-confirm-password" className="w-100">
          <Form.Control
            type="password"
            placeholder="Confirm password"
            className={`w-100 ${isInvalid ? 'invalid-field' : ''}`}
            value={confirmPassword}
            onChange={this.handleConfirmPasswordChange}
            required
          />
          <Form.Label>Confirm password</Form.Label>
          <Form.Control.Feedback
            type="invalid"
            className={isInvalid ? 'show-invalid' : ''}
          >
            Passwords do not match
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit" size="lg" block>
          Sign up
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users
});

const mapDispatchToProps = {
  addUser: (name, password, avatarURL) =>
    userActions.handleAddUser(name, password, avatarURL)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
