import * as types from './types';
import { createReducer } from '../../utils';

export default createReducer(null)({
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
    [action.id]: {
      ...state[action.id],
      [action.option]: {
        ...state[action.id][action.option],
        votes: [...state[action.id][action.option].votes, action.authedUser]
      }
    }
  }),
  [types.RESET_QUESTION]: (state, action) => ({
    ...state,
    [action.id]: {
      ...state[action.id],
      optionOne: {
        ...state[action.id].optionOne,
        votes: state[action.id].optionOne.votes.filter(
          userId => userId !== action.authedUser
        )
      },
      optionTwo: {
        ...state[action.id].optionTwo,
        votes: state[action.id].optionTwo.votes.filter(
          userId => userId !== action.authedUser
        )
      }
    }
  })
});
