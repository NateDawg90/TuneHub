import * as APIUtil from '../util/artist_api_util';
import {receiveAllArtists} from './artist_actions';

export const UPDATE_SEARCH = "UPDATE_SEARCH";

export const updateSearch = (searchInput) => (dispatch) => {
  dispatch(changeSearch(searchInput));
	APIUtil.fetchAllArtists({searchInput}).then(data =>
      dispatch(receiveAllArtists(data)));
};

export const changeSearch = (searchInput) => ({
  type: UPDATE_SEARCH,
  searchInput
});
