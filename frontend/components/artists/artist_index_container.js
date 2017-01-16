import { connect } from 'react-redux';
import ArtistIndex from './artist_index';
import { requestAllArtists, requestSampleArtists } from '../../actions/artist_actions';
import {selectAllArtists} from '../../reducers/selectors';

const mapStateToProps = state => ({
  artists: selectAllArtists(state),
});

const mapDispatchToProps = dispatch => ({
  fetchArtists: () => dispatch(requestSampleArtists()),
  requestAllArtists: () => dispatch(requestAllArtists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistIndex);
