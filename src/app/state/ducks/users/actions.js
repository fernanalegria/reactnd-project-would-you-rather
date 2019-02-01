import * as types from './types';

export const receiveUsers = users => ({
  type: types.RECEIVE_USERS,
  users
});

const addUser = user => ({
  type: types.ADD_USER,
  user
});

// TODO: create functions in _DATA.js and api.js to save new users in the fake db
//       and make the request from a thunk action creator