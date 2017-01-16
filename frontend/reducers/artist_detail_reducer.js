import { merge } from 'lodash';

import {
  RECEIVE_ALL_ARTISTS,
  RECEIVE_NEW_ARTIST,
  RECEIVE_SINGLE_ARTIST
} from '../actions/artist_actions';

const _nullArtist = Object.freeze({
  id: "",
  username: "",
  user_type: "",
  name: "",
  location: "",
  description: ""
});

const ArtistDetailReducer = (state = _nullArtist, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_ARTIST:
      return merge({}, action.artist);
    case RECEIVE_NEW_ARTIST:
      return merge({}, {
        [action.artist.id]: action.artist
      });
    default:
      return state;
  }
};

export default ArtistDetailReducer;
