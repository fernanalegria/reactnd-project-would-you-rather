import * as types from './types';
import { saveQuestion, saveQuestionAnswer } from '../../../../server/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const receiveQuestions = questions => ({
  type: types.RECEIVE_QUESTIONS,
  questions
});

const answerQuestion = ({ qid, authedUser, answer }) => ({
  type: types.ANSWER_QUESTION,
  qid,
  authedUser,
  answer
});

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

const addQuestion = (question, authedUser) => ({
  type: types.ADD_QUESTION,
  question,
  authedUser
});

export const handleAddQuestion = (optionOneText, optionTwoText, callback) => (
  dispatch,
  getState
) => {
  const { authedUser } = getState();

  dispatch(showLoading());
  return saveQuestion({
    optionOneText,
    optionTwoText,
    author: authedUser
  })
    .then(question => {
      dispatch(addQuestion(question, authedUser));
    })
    .then(() => {
      dispatch(hideLoading());
      if (callback) {
        callback();
      }
    });
};
