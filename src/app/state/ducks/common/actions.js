import { getInitialData } from '../../../../server/api';
import { questionActions } from '../questions';
import { userActions } from '../users';
import { showLoading, hideLoading } from 'react-redux-loading';

export const handleFetchData = () => dispatch => {
  dispatch(showLoading('initial'));
  return getInitialData().then(({ users, questions }) => {
    dispatch(userActions.receiveUsers(users));
    dispatch(questionActions.receiveQuestions(questions));
    dispatch(hideLoading('initial'));
  });
};
