import merge from 'lodash/merge';
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  RECEIVE_CLEAR_ERRORS
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    const currentUser = action.currentUser;
      return merge({}, state, {
        currentUser
      });

    case RECEIVE_ERRORS:
      return merge({}, state, {
        errors: action.errors
      });

    case RECEIVE_CLEAR_ERRORS:
    // debugger;
      return _nullUser;

    default:
      return state;
  }
};

export default SessionReducer;
