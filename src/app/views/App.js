import React, { Component } from 'react';
import { connect } from 'react-redux';
import { commonActions } from '../state/ducks/common';
import { isEmptyObject } from '../utils/helpers';
import LoginPage from './pages/login';
import Home from './pages/Home';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './common/ProtectedRoute';

class App extends Component {
  componentDidMount() {
    this.props.handleFetchData();
  }

  render() {
    return (
      <Router>
        <div className="app">
          <LoadingBar />
          {!this.props.loading && (
            <Switch>
              <Route path="/" exact component={LoginPage} />
              <ProtectedRoute
                path="/(questions|add|leaderboard)"
                component={Home}
              />
            </Switch>
          )}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  loading: isEmptyObject(users)
});

const mapDispatchToProps = {
  handleFetchData: () => commonActions.handleFetchData()
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
