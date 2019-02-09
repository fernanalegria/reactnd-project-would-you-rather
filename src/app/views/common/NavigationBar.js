import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './common.scss';

const NavigationBar = props => {
  const { pathname } = props.location;
  console.log('Pathname', pathname);
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
          className={`nav-link ${pathname === '/leaderboard' ? 'active' : ''}`}
        >
          Leaderboard
        </Link>
      </Nav>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <span className="authed-user">{props.user.name}</span>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  user: users[authedUser]
});

export default withRouter(connect(mapStateToProps)(NavigationBar));
