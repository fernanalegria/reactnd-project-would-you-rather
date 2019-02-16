import { getInitialData } from '../../../../server/api';
import { questionActions } from '../questions';
import { userActions } from '../users';
import { showLoading, hideLoading } from 'react-redux-loading';

/**
 * Calls API to fetch the initial data and save it into the Redux store
 * @returns  {Promise}
 */
export const handleFetchData = () => dispatch => {
  dispatch(showLoading('initial'));
  return getInitialData().then(({ users, questions }) => {
    dispatch(userActions.receiveUsers(users));
    dispatch(questionActions.receiveQuestions(questions));
    dispatch(hideLoading('initial'));
  });
};
