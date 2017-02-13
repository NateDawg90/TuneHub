import React from 'react';
import ReactPlayer from 'react-player';
import {withRouter} from 'react-router';


class TrackIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    playing: false,
    volume: 0.1
    };
    this.playPause = this.playPause.bind(this);
    this.playPauseIcon = this.playPauseIcon.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.playing
      && this.props.track.track_url === nextProps.currentTrack.track_url
      && this.props.track.track_url === nextProps.track.track_url) {
      this.setState({playing: true});
    } else {
      this.setState({playing: false});
    }

  }


  playPause(){
    if (this.state.playing === false) {
      this.props.addTrack(this.props.track, this.props.artist);
      this.setState({playing: true});
    } else {
      this.props.pauseTrack();
      this.setState({playing: false});
    }
  }

  playPauseIcon() {
    if (this.state.playing) {
      return(
        <i className="fa fa-pause-circle"></i>
      );
    } else {
      return(
        <i className="fa fa-play-circle" ></i>
      );
    }
  }

  render() {
    return (
      <div className="track-item">
        <label className="title">{this.props.track.name}</label>
        <div className="track-player">

          <button
            className="mini-play-button"
            onClick={this.playPause}>{this.playPauseIcon()}
          </button>

        </div>

      </div>
    );
  }
}

export default withRouter(TrackIndexItem);
