import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './common.scss';
import UserAvatar from './UserAvatar';
import { authedUserActions } from '../../state/ducks/authedUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Bar to navigate through the different web pages
 */
class NavigationBar extends Component {
  /**
   * Logs the user out and redirects them to the login page
   */
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
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>Would you rather?</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Link
              to="/questions"
              className={`nav-link ${
                pathname === '/questions' ? 'active' : ''
              }`}
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
          <Nav className="justify-content-end">
            <Navbar.Text>
              Signed in as:
              <UserAvatar url={avatarURL} size="sm" className="mx-2" />
              <span className="authed-user">{name}</span>
            </Navbar.Text>
            <Nav.Link onClick={this.logOut} className="log-out">
              <FontAwesomeIcon icon="power-off" />
            </Nav.Link>
          </Nav>
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
