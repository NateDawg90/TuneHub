import {connect} from 'react-redux';
import TrackPlayer from './track_player';

const mapStateToProps = ({trackPlayer})=>({
  trackPlayer: trackPlayer.tracks[0],
  trackPlayerArtist: trackPlayer.artist,
  trackPlaying: trackPlayer.playing
});


const mapDispatchToProps = (dispatch)=>({

});



export default connect(mapStateToProps, mapDispatchToProps)(TrackPlayer);
