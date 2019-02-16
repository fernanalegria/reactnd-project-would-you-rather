import * as types from './types';

/**
 * Sets the logged in user
 * @param  {string} id
 * @returns  {Object} Action
 */
const setAuthedUser = id => ({
  type: types.SET_AUTHED_USER,
  id
});

/**
 * Clears the logged in user in the Redux store
 * @returns  {Object} Action
 */
const unsetAuthedUser = () => ({
  type: types.UNSET_AUTHED_USER
});

/**
 * Sets the logged in user
 * @param  {string} id
 * @returns  {Promise}
 */
export const handleSetAuthedUser = id => dispatch => {
  dispatch(setAuthedUser(id));
  return Promise.resolve();
};

/**
 * Clears the logged in user in the Redux store
 * @returns  {Promise}
 */
export const handleUnsetAuthedUser = () => dispatch => {
  dispatch(unsetAuthedUser());
  return Promise.resolve();
};
