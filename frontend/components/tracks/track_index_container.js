import {connect} from 'react-redux';
import TrackIndex from './track_index';

const mapStateToProps = ({session, artistDetail, trackPlayer}) => {
  // debugger;
  return {
    currentUser: session.currentUser,
    tracks: artistDetail.tracks,
    trackPlayer: trackPlayer.tracks[0],
    trackPlayerArtist: trackPlayer.artist,
    trackPlaying: trackPlayer.playing
  };
};


const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
