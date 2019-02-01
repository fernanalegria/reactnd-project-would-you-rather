import * as types from './types';

export const setAuthedUser = id => ({
  type: types.SET_AUTHED_USER,
  id
});

export const unsetAuthedUser = () => ({
  type: types.UNSET_AUTHED_USER
});
