import * as types from './types';
import { saveUser } from '../../../../server/api';
import { showLoading, hideLoading } from 'react-redux-loading';

/**
 * Saves a list of users in the Redux store
 * @param  {Object} users
 * @returns  {Object} Action
 */
export const receiveUsers = users => ({
  type: types.RECEIVE_USERS,
  users
});

/**
 * Saves a new user in the Redux store
 * @param  {Object} user
 * @returns  {Object} Action
 */
const addUser = user => ({
  type: types.ADD_USER,
  user
});

/**
 * Saves a new user in the database and populates the result to Redux
 * @param  {string} name
 * @param  {string} password
 * @param  {string} avatarURL
 * @returns  {Promise}
 */
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
