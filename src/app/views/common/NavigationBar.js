import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './common.scss';
import UserAvatar from './UserAvatar';
import { authedUserActions } from '../../state/ducks/authedUser';

class NavigationBar extends Component {
  logOut = () => {
    const { logOut, history } = this.props;
    logOut().then(() => {
      history.push('/');
    });
  };

  render() {
    const {
      user: { name, avatarURL },
      location: { pathname }
    } = this.props;
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Would you rather?</Navbar.Brand>
        <Nav className="mr-auto">
          <Link
            to="/questions"
            className={`nav-link ${pathname === '/questions' ? 'active' : ''}`}
          >
            Questions
          </Link>
          <Link
            to="/add"
            className={`nav-link ${pathname === '/add' ? 'active' : ''}`}
          >
            New Question
          </Link>
          <Link
            to="/leaderboard"
            className={`nav-link ${
              pathname === '/leaderboard' ? 'active' : ''
            }`}
          >
            Leaderboard
          </Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="px-3">Signed in as:</Navbar.Text>
          <UserAvatar url={avatarURL} size="sm" />
          <NavDropdown title={name}>
            <NavDropdown.Item onClick={this.logOut}>Log out</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => ({
  user: users[authedUser]
});

const mapDispatchToProps = {
  logOut: () => authedUserActions.handleUnsetAuthedUser()
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavigationBar)
);
