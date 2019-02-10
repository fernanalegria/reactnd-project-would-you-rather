import * as types from './types';
import { saveUser } from '../../../../server/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const receiveUsers = users => ({
  type: types.RECEIVE_USERS,
  users
});

const addUser = user => ({
  type: types.ADD_USER,
  user
});

export const handleAddUser = (name, password, avatarURL) => dispatch => {
  dispatch(showLoading('initial'));
  return saveUser({
    name,
    password,
    avatarURL
  })
    .then(user => {
      dispatch(addUser(user));
    })
    .then(() => {
      dispatch(hideLoading('initial'));
    });
};
