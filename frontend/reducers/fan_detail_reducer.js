import { merge } from 'lodash';

import {
  RECEIVE_ALL_FANS,
  RECEIVE_NEW_FAN,
  RECEIVE_SINGLE_FAN
} from '../actions/fan_actions';

const _nullFan = Object.freeze({
  id: "",
  username: "",
  user_type: "fan",
  tracks: []
});

const FanDetailReducer = (state = _nullFan, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_FAN:
      return merge({}, action.fan);
    case RECEIVE_NEW_FAN:
      return merge({}, {
        [action.fan.id]: action.fan
      });
    default:
      return state;
  }
};

export default FanDetailReducer;
