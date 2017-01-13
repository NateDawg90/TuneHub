import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ArtistsReducer from './artists_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  artists: ArtistsReducer
});

export default rootReducer;
