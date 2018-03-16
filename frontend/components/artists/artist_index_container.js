import { connect } from 'react-redux';
import ArtistIndex from './artist_index';
import { requestAllArtists, requestSampleArtists } from '../../actions/artist_actions';
import {selectAllArtists} from '../../reducers/selectors';
import { login } from '../../actions/session_actions';


const mapStateToProps = state => ({
  artists: selectAllArtists(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchSampleArtists: () => dispatch(requestSampleArtists()),
  login: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistIndex);
