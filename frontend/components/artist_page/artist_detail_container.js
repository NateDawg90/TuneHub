import {connect} from 'react-redux';
import ArtistDetail from './artist_detail';
import { requestSingleArtist, createFollow, deleteFollow } from '../../actions/artist_actions';
import { addTrackToQueue } from '../../actions/track_player_actions';

//your current user is your current artist.
const mapStateToProps = ({session, artistDetail}, ownProps) => {
  return {
    currentUser: session.currentUser,
    artist: artistDetail,
    artistId: ownProps.params.artistId
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestArtist: (id) => dispatch(requestSingleArtist(id)),
  addTrackToQueue: (track, artist) => dispatch(addTrackToQueue(track, artist)),
  follow: (follow) => dispatch(createFollow(follow)),
  unFollow: (artistId) => dispatch(deleteFollow(artistId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetail);
