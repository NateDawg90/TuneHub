import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ArtistsReducer from './artist_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  artists: ArtistsReducer
});

export default rootReducer;
