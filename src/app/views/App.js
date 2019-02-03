import React, { Component } from 'react';
import { connect } from 'react-redux';
import { commonActions } from '../state/ducks/common';
import { isEmptyObject } from '../utils/helpers';
import LoginPage from './pages/login';
import QuestionsPage from './pages/questions/QuestionsPage';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
            <div>
              <Route path="/" exact component={LoginPage} />
              <Route path="/questions" component={QuestionsPage} />
            </div>
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
