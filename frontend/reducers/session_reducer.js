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
      return {
        currentUser: action.currentUser,
        errors: []
      };

      // const currentUser = action.currentUser;
      // return merge({}, state, {
      //   currentUser
      // });

    case RECEIVE_ERRORS:
      return merge({}, state, {
        errors: action.errors
      });

    case RECEIVE_CLEAR_ERRORS:
    // debugger;
      const newState = merge({}, state);
      newState.errors = [];
      return newState;

    default:
      return state;
  }
};

export default SessionReducer;
