import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { node, string } from 'prop-types';

/**
 * Route only accessible if the user has logged in
 */
const ProtectedRoute = ({ component: Component, authedUser, ...props }) => (
  <Route
    {...props}
    render={props =>
      authedUser ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const mapStateToProps = ({ authedUser }) => ({
  authedUser
});

ProtectedRoute.propTypes = {
  component: node.isRequired,
  authedUser: string
};

export default connect(mapStateToProps)(ProtectedRoute);
