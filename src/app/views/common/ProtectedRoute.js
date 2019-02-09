import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class ProtectedRoute extends Component {
  render() {
    const { component: Component, authedUser, ...props } = this.props;

    return (
      <Route
        {...props}
        render={props =>
          authedUser ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser
});

export default connect(mapStateToProps)(ProtectedRoute);
