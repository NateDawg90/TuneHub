import {connect} from 'react-redux';
import TrackIndex from './track_index';

const mapStateToProps = ({session, artistDetail}) => {
  return {
    currentUser: session.currentUser,
    tracks: artistDetail.tracks
  };
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
