import {connect} from 'react-redux';
import FanDetail from './fan_detail';
import { requestSingleArtist } from '../../actions/artist_actions';
import { requestUser } from '../../actions/session_actions';

//your current user is your current artist.
const mapStateToProps = ({session}) => ({
    currentUser: session.currentUser
});


const mapDispatchToProps = (dispatch) => ({
  requestArtist: (id) => dispatch(requestSingleArtist(id)),
  requestUser: (id) => dispatch(requestUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(FanDetail);
