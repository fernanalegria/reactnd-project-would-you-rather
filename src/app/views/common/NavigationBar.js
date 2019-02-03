import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './NavigationBar.scss';

const NavigationBar = props => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>Would you rather?</Navbar.Brand>
    <Nav className="mr-auto">
      <Link to="/questions" className="nav-link">
        Questions
      </Link>
      <Link to="/add" className="nav-link">
        New Question
      </Link>
      <Link to="/leaderboard" className="nav-link">
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

const mapStateToProps = ({ authedUser, users }) => ({
  user: users[authedUser]
});

export default withRouter(connect(mapStateToProps)(NavigationBar));
