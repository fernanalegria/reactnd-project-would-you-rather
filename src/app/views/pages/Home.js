import React, { Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import NavigationBar from '../common/NavigationBar';
import QuestionsPage, { QuestionContainer } from './questions';
import NewQuestion from './newQuestion';
import BaseContainer from '../common/BaseContainer';
import LoadingBar from 'react-redux-loading';
import LeaderBoard from './leaderboard';

/**
 * Home page where user is redirected after logging in
 */
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

export default withRouter(Home);
