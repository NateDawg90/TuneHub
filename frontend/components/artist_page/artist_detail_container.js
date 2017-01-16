import {connect} from 'react-redux';
import ArtistDetail from './artist_detail';
import { requestSingleArtist } from '../../actions/artist_actions';

//your current user is your current artist.
const mapStateToProps = ({session, artistDetail}, ownProps) => {
  return {
    artist: artistDetail,
    artistId: ownProps.params.artistId
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestArtist: (id) => dispatch(requestSingleArtist(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetail);
