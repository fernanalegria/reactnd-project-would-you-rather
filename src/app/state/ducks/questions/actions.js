import * as types from './types';
import { saveQuestion, saveQuestionAnswer } from '../../../../server/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const receiveQuestions = questions => ({
  type: types.RECEIVE_QUESTIONS,
  questions
});

const answerQuestion = ({ id, authedUser, option }) => ({
  type: types.ANSWER_QUESTION,
  id,
  authedUser,
  option
});

const resetQuestion = ({ id, authedUser }) => ({
  type: types.ANSWER_QUESTION,
  id,
  authedUser
});

export const handleAnswerQuestion = info => dispatch => {
  const { id, authedUser } = info;
  dispatch(answerQuestion(info));
  return saveQuestionAnswer(info).catch(e => {
    console.warn('Error in handleAnswerQuestion: ', e);
    dispatch(resetQuestion({ id, authedUser }));
    alert('There was an error saving the answer. Please try again.');
  });
};

const addQuestion = question => ({
  type: types.ADD_QUESTION,
  question
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
      dispatch(addQuestion(question));
    })
    .then(() => {
      dispatch(hideLoading());
      if (callback) {
        callback();
      }
    });
};
