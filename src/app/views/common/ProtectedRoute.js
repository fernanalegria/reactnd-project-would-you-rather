import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { elementType, string } from 'prop-types';
import { rootUrl } from '../../../index';

/**
 * Route only accessible if the user has logged in
 */
const ProtectedRoute = ({ component: Component, authedUser, ...props }) => (
  <Route
    {...props}
    render={props =>
      authedUser ? <Component {...props} /> : <Redirect to={rootUrl} />
    }
  />
);

const mapStateToProps = ({ authedUser }) => ({
  authedUser
});

ProtectedRoute.propTypes = {
  component: elementType.isRequired,
  authedUser: string
};

export default connect(mapStateToProps)(ProtectedRoute);
