import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ArtistsReducer from './artists_reducer';
import ArtistDetailReducer from './artist_detail_reducer';
import TrackPlayerReducer from './track_player_reducer';
import FanDetailReducer from './fan_detail_reducer';
import SearchReducer from './search_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  artists: ArtistsReducer,
  artistDetail: ArtistDetailReducer,
  fanDetail: FanDetailReducer,
  search: SearchReducer,
  trackPlayer: TrackPlayerReducer
});

export default rootReducer;
