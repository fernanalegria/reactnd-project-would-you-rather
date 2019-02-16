import * as types from './types';
import { saveQuestion, saveQuestionAnswer } from '../../../../server/api';
import { showLoading, hideLoading } from 'react-redux-loading';

/**
 * Saves a list of questions in the Redux store
 * @param  {Object} questions
 * @returns  {Object} Action
 */
export const receiveQuestions = questions => ({
  type: types.RECEIVE_QUESTIONS,
  questions
});

/**
 * Saves the user's answer to a question in the Redux store
 * @param  {string} qid Question id
 * @param  {string} authedUser User who answers the question
 * @param  {string} answer Option chosen by the user
 * @returns  {Object} Action
 */
const answerQuestion = ({ qid, authedUser, answer }) => ({
  type: types.ANSWER_QUESTION,
  qid,
  authedUser,
  answer
});

/**
 * Saves the user's answer to a question in the database
 * and then populates the result in Redux
 * @param  {string} qid Question id
 * @param  {string} authedUser User who answers the question
 * @param  {string} answer Option chosen by the user
 * @returns  {Promise}
 */
export const handleAnswerQuestion = info => (dispatch, getState) => {
  const { authedUser } = getState();
  return saveQuestionAnswer({ ...info, authedUser })
    .then(() => {
      dispatch(answerQuestion({ ...info, authedUser }));
    })
    .catch(e => {
      console.warn('Error in handleAnswerQuestion: ', e);
      alert('There was an error saving the answer. Please try again.');
    });
};

/**
 * Creates a new question
 * @param  {string} authedUser Logged in user
 * @param  {Object} question Formatted question which consists of:
 *                            - two possible answers
 *                            - the author
 *                            - the date when it was created
 * @returns  {Object} Action
 */
const addQuestion = (question, authedUser) => ({
  type: types.ADD_QUESTION,
  question,
  authedUser
});

/**
 * Saves a new question in database and populates the result to Redux
 * @param  {optionOneText} string One of the two possible answers to the would you rather question
 * @param  {optionTwoText} string One of the two possible answers to the would you rather question
 * @returns  {Promise}
 */
export const handleAddQuestion = (optionOneText, optionTwoText) => (
  dispatch,
  getState
) => {
  const { authedUser } = getState();

  dispatch(showLoading('home'));
  return saveQuestion({
    optionOneText,
    optionTwoText,
    author: authedUser
  })
    .then(question => {
      dispatch(addQuestion(question, authedUser));
    })
    .then(() => {
      dispatch(hideLoading('home'));
    });
};
