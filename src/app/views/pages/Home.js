import React, { Component, Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import NavigationBar from '../common/NavigationBar';
import QuestionsPage from './questions/QuestionsPage';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <NavigationBar />
        <Switch>
          <Route path="/questions" component={QuestionsPage} />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser
});

export default withRouter(connect(mapStateToProps)(Home));
