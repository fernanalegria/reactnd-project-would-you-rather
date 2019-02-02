import * as types from './types';

const setAuthedUser = id => ({
  type: types.SET_AUTHED_USER,
  id
});

export const unsetAuthedUser = () => ({
  type: types.UNSET_AUTHED_USER
});

export const handleSetAuthedUser = id => dispatch => {
  dispatch(setAuthedUser(id));
  return Promise.resolve();
};
