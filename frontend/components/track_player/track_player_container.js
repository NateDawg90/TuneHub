import {connect} from 'react-redux';
import TrackPlayer from './track_player';
import {pauseTrack, playTrack} from '../../actions/track_player_actions';

const mapStateToProps = ({trackPlayer})=>({
  trackPlayer: trackPlayer.tracks[0],
  trackPlayerArtist: trackPlayer.artist,
  trackPlaying: trackPlayer.playing
});


const mapDispatchToProps = (dispatch)=>({
  pauseTrack: () => dispatch(pauseTrack()),
  playTrack: () => dispatch(playTrack())
});



export default connect(mapStateToProps, mapDispatchToProps)(TrackPlayer);
