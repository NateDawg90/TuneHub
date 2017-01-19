import { connect } from 'react-redux';
import Search from './search';
import {requestAllArtists, requestSampleArtists} from '../../actions/artist_actions';
import {updateSearch} from '../../actions/search_actions';


const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  updateSearch: (searchInput) => dispatch(updateSearch(searchInput)),
  fetchSampleArtists: () => dispatch(requestSampleArtists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
