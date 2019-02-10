import * as types from './types';

const setAuthedUser = id => ({
  type: types.SET_AUTHED_USER,
  id
});

const unsetAuthedUser = () => ({
  type: types.UNSET_AUTHED_USER
});

export const handleSetAuthedUser = id => dispatch => {
  dispatch(setAuthedUser(id));
  return Promise.resolve();
};

export const handleUnsetAuthedUser = () => dispatch => {
  dispatch(unsetAuthedUser());
  return Promise.resolve();
};
