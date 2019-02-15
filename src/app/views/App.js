import React, { Component } from 'react';
import { connect } from 'react-redux';
import { commonActions } from '../state/ducks/common';
import { isEmptyObject } from '../utils/helpers';
import LoginPage from './pages/login';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './common/ProtectedRoute';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheckCircle,
  faUpload,
  faExclamationTriangle,
  faPowerOff
} from '@fortawesome/free-solid-svg-icons';
import { LastLocationProvider } from 'react-router-last-location';

/**
 * Component that wraps the whole app
 */
class App extends Component {
  /**
   * Loads the initial data into the app
   */
  componentDidMount() {
    this.props.handleFetchData();
  }

  render() {
    return (
      <Router>
        <LastLocationProvider>
          <div className="app">
            <LoadingBar className="initial-loading-bar" scope="initial" />
            {!this.props.loading && (
              <Switch>
                <Route path="/" exact component={LoginPage} />
                <ProtectedRoute
                  path="/(questions|add|leaderboard)"
                  component={Home}
                />
                <Route component={NoMatch} />
              </Switch>
            )}
          </div>
        </LastLocationProvider>
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

library.add([faCheckCircle, faUpload, faExclamationTriangle, faPowerOff]);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
