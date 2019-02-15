import React, { Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import NavigationBar from '../common/NavigationBar';
import QuestionsPage, { QuestionContainer } from './questions';
import NewQuestion from './newQuestion';
import { connect } from 'react-redux';
import BaseContainer from '../common/BaseContainer';
import LoadingBar from 'react-redux-loading';
import LeaderBoard from './leaderboard';

const Home = () => (
  <Fragment>
    <NavigationBar />
    <LoadingBar className="home-loading-bar" scope="home" />
    <BaseContainer align="top">
      <Switch>
        <Route path="/questions" exact component={QuestionsPage} />
        <Route path="/questions/:id" component={QuestionContainer} />
        <Route path="/add" component={NewQuestion} />
        <Route path="/leaderboard" component={LeaderBoard} />
      </Switch>
    </BaseContainer>
  </Fragment>
);

const mapStateToProps = ({ authedUser }) => ({
  authedUser
});

export default withRouter(connect(mapStateToProps)(Home));
