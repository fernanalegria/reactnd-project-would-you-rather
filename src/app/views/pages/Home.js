import React, { Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import NavigationBar from '../common/NavigationBar';
import QuestionsPage, { QuestionContainer } from './questions';
import NewQuestion from './newQuestion';
import BaseContainer from '../common/BaseContainer';
import LoadingBar from 'react-redux-loading';
import LeaderBoard from './leaderboard';
import { rootUrl } from '../../../index';

/**
 * Home page where user is redirected after logging in
 */
const Home = () => (
  <Fragment>
    <NavigationBar />
    <LoadingBar className="home-loading-bar" scope="home" />
    <BaseContainer align="top">
      <Switch>
        <Route path={`${rootUrl}/questions`} exact component={QuestionsPage} />
        <Route
          path={`${rootUrl}/questions/:id`}
          component={QuestionContainer}
        />
        <Route path={`${rootUrl}/add`} component={NewQuestion} />
        <Route
          path={`${rootUrl}/leaderboard`}
          component={LeaderBoard}
        />
      </Switch>
    </BaseContainer>
  </Fragment>
);

export default withRouter(Home);
