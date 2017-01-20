import { merge } from 'lodash';

import {
  RECEIVE_ALL_ARTISTS,
  RECEIVE_NEW_ARTIST,
  RECEIVE_SINGLE_ARTIST,
  REMOVE_FOLLOW
} from '../actions/artist_actions';

const _nullArtist = Object.freeze({
  id: "",
  username: "",
  user_type: "artist",
  name: "",
  location: "",
  description: "",
  tracks: [],
  followers: []
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
    case REMOVE_FOLLOW:
      return merge({}, action.follow);
    default:
      return state;
  }
};

export default ArtistDetailReducer;
