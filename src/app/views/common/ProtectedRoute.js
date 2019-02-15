import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps)(ProtectedRoute);
