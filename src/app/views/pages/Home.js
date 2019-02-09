import React, { Component, Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import NavigationBar from '../common/NavigationBar';
import QuestionsPage, { QuestionContainer } from './questions';
import { connect } from 'react-redux';
import BaseContainer from '../common/BaseContainer';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <NavigationBar />
        <BaseContainer align="top">
          <Switch>
            <Route path="/questions" exact component={QuestionsPage} />
            <Route path="/questions/:id" component={QuestionContainer} />
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
