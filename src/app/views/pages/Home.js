import React, { Component, Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import NavigationBar from '../common/NavigationBar';
import QuestionsPage, { QuestionContainer } from './questions';
import NewQuestion from './newQuestion';
import { connect } from 'react-redux';
import BaseContainer from '../common/BaseContainer';
import LoadingBar from 'react-redux-loading';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <NavigationBar />
        <LoadingBar />
        <BaseContainer align="top">
          <Switch>
            <Route path="/questions" exact component={QuestionsPage} />
            <Route path="/questions/:id" component={QuestionContainer} />
            <Route path="/add" component={NewQuestion} />
          </Switch>
        </BaseContainer>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser
});

export default withRouter(connect(mapStateToProps)(Home));
