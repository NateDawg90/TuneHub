import merge from 'lodash/merge';
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';
import { RECEIVE_NEW_FOLLOW } from '../actions/artist_actions';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  // debugger;

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    // debugger;
    const currentUser = action.currentUser;
      return merge({}, _nullUser, {
        currentUser
      });

    case RECEIVE_NEW_FOLLOW:
      // debugger;
      return merge({}, _nullUser, {
        currentUser: action.follow
      });

    case RECEIVE_ERRORS:
    const errors = action.errors;
      return merge({}, _nullUser, {
        errors
      });

    default:
      return state;
  }
};

export default SessionReducer;
