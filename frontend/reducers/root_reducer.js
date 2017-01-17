import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ArtistsReducer from './artists_reducer';
import ArtistDetailReducer from './artist_detail_reducer';
import TrackPlayerReducer from './track_player_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  artists: ArtistsReducer,
  artistDetail: ArtistDetailReducer,
  trackPlayer: TrackPlayerReducer
});

export default rootReducer;
