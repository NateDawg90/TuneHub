import { ADD_TO_QUEUE, PAUSE, PLAY } from "../actions/track_player_actions";
import {merge} from "lodash";

const _empty = {
      tracks: [{}],
      artist: {},
      playing: false
};

const TrackPlayerReducer = (state = _empty, action) => {
  Object.freeze(state);
  let newState = {};

  switch(action.type){

    case ADD_TO_QUEUE:
      newState = merge({}, state);
      newState.tracks.shift();
      newState.tracks.push(action.track);
      newState.artist = action.artist;
      newState.playing = true;
      return newState;

    case PAUSE:
      newState = merge({}, state);
      newState.playing = false;
      return newState;

    case PLAY:
      newState = merge({}, state);
      newState.playing = true;
      return newState;

    default:
      return state;
  }
};

export default TrackPlayerReducer;
