import React, { Component } from 'react';
import { connect } from 'react-redux';
import { commonActions } from '../state/ducks/common';
import { isEmptyObject } from '../utils/helpers';
import LoginPage from './pages/login/LoginPage';

class App extends Component {
  componentDidMount() {
    this.props.handleFetchData();
  }

  render() {
    return (
      <div className="app">
        {!this.props.loading && <LoginPage />}
      </div>
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
