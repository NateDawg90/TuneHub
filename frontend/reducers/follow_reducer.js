import { merge } from 'lodash';

import {
  REMOVE_FOLLOW,
  RECEIVE_NEW_FOLLOW
} from '../actions/follow_actions';

const _nullFollow = Object.freeze({
  follow: "",
  errors: []
});

const FollowReducer = (state = _nullFollow, action) => {
  Object.freeze(state);
  switch (action.type) {
    case REMOVE_FOLLOW:
      return merge({}, action.follow);
    case RECEIVE_NEW_FOLLOW:
      // debugger;
      return Object.assign({}, _nullFollow, {
        follow: action.follow
      });

    default:
      return state;
  }
};

export default FollowReducer;
