import * as types from './types';
import { createReducer } from '../../utils';

export default createReducer({})({
  [types.RECEIVE_QUESTIONS]: (state, action) => ({
    ...state,
    ...action.questions
  }),
  [types.ADD_QUESTION]: (state, action) => ({
    ...state,
    [action.question.id]: action.question
  }),
  [types.ANSWER_QUESTION]: (state, action) => ({
    ...state,
    [action.qid]: {
      ...state[action.qid],
      [action.answer]: {
        ...state[action.qid][action.answer],
        votes: [...state[action.qid][action.answer].votes, action.authedUser]
      }
    }
  })
});
