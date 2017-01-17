import { merge } from 'lodash';

import {
  RECEIVE_ALL_ARTISTS,
  RECEIVE_NEW_ARTIST,
  RECEIVE_SINGLE_ARTIST
} from '../actions/artist_actions';


const ArtistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ARTISTS:
      return merge({}, action.artists);
    default:
      return state;
  }
};

export default ArtistsReducer;
