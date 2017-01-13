import { merge } from 'lodash';

import {
  RECEIVE_ALL_ARTISTS,
  RECEIVE_NEW_ARTIST
} from '../actions/artist_actions';

const _nullArtist = Object.freeze({
  // #  id              :integer          not null, primary key
  // #  username        :string           not null
  // #  password_digest :string           not null
  // #  session_token   :string           not null
  // #  type            :string
  // #  name            :string
  // #  location        :string
  // #  description     :string
  // username: "",

});

const ArtistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ARTISTS:
      return merge({}, action.user);
    case RECEIVE_NEW_ARTIST:
      return merge({}, state, {
        [action.user.id]: action.user
      });
    default:
      return state;
  }
};

export default ArtistsReducer;
