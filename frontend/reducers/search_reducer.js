import { merge } from 'lodash';

import { UPDATE_SEARCH } from '../actions/search_actions';


const SearchReducer = (state = { searchInput: "" }, action) => {
  Object.freeze(state);
  switch (action.type) {
  case UPDATE_SEARCH:
    return merge({}, state, {
      searchInput: action.searchInput
    });

  default:
    return state;
  }
};

export default SearchReducer;
