import * as SessionAPI from '../util/session_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

// async
export const signup = user => dispatch => (
  SessionAPI.signup(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser))),
    error => dispatch(receiveErrors(error.responseJSON))
);

export const login = user => dispatch => (
  SessionAPI.login(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser))),
    error => dispatch(receiveErrors(error.responseJSON))
);

export const logout = () => dispatch => (
  SessionAPI.logout()
    .then(user => dispatch(receiveCurrentUser(null)))
);

export const requestUser = id => dispatch => (
  SessionAPI.fetchUser(id)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser))),
    error => dispatch(receiveErrors(error.responseJSON))
);
