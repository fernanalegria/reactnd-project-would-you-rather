import * as types from './types';
import { questionTypes } from '../questions';
import { createReducer } from '../../utils';

export default createReducer(null)({
  [types.RECEIVE_USERS]: (state, action) => ({
    ...state,
    ...action.users
  }),
  [types.ADD_USER]: (state, action) => ({
    ...state,
    [action.user.id]: action.user
  }),
  [questionTypes.ADD_QUESTION]: (state, action) => ({
    ...state,
    [action.authedUser]: {
      ...state[action.authedUser],
      questions: [...state[action.authedUser].questions, action.question.id]
    }
  }),
  [questionTypes.ANSWER_QUESTION]: (state, action) => ({
    ...state,
    [action.authedUser]: {
      ...state[action.authedUser],
      answers: {
        ...state[action.authedUser].answers,
        [action.id]: action.option
      }
    }
  }),
  [questionTypes.RESET_QUESTION]: (state, action) => {
    const { [action.id]: omit, ...res } = state[action.authedUser].answers;
    return {
      ...state,
      [action.authedUser]: {
        ...state[action.authedUser],
        answers: res
      }
    };
  }
});
