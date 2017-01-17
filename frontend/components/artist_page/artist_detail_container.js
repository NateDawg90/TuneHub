import {connect} from 'react-redux';
import ArtistDetail from './artist_detail';
import { requestSingleArtist } from '../../actions/artist_actions';
import { addTrackToQueue } from '../../actions/track_player_actions';

//your current user is your current artist.
const mapStateToProps = ({session, artistDetail}, ownProps) => {
  return {
    artist: artistDetail,
    artistId: ownProps.params.artistId
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestArtist: (id) => dispatch(requestSingleArtist(id)),
  addTrackToQueue: (track, artist) => dispatch(addTrackToQueue(track, artist))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetail);
