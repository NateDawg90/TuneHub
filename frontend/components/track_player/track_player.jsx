import React from 'react';
import ReactPlayer from 'react-player';
import {Link} from 'react-router';
import {withRouter} from 'react-router';


class TrackPlayer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playing: false,
      volume: 0.1
    };
    // debugger;
    this.playPause = this.playPause.bind(this);
    this.stop = this.stop.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.playPauseIcon = this.playPauseIcon.bind(this);
  }


  // componentWillUpdate() {
  //   // debugger;
  //   if (this.props.trackPlaying && !this.state.playing){
  //    this.setState({playing: true});
  //   } else if (!this.props.trackPlaying && this.state.playing){
  //    this.setState({playing: false});
  //   }
  //
  // }

  // shouldComponentUpdate() {
  //   if (this.state.playing === this.props.trackPlaying) {
  //     return false;
  //   }
  //   return true;
  //
  // }

  componentWillReceiveProps(nextProps) {
    // debugger;
    this.setState({playing: nextProps.trackPlaying});
  }

  playPause() {
    // debugger;
    if (this.state.playing === true) {
      this.props.pauseTrack();
    } else {
      this.props.playTrack();
    }
    this.setState({ playing: !this.state.playing });
  }

  playPauseIcon() {
    if (this.state.playing) {
      return(
        <i className="fa fa-pause"></i>
      );
    } else {
      return(
        <i className="fa fa-play" ></i>
      );
    }
  }

  stop() {
    this.setState({ url: null, playing: false });
  }

  setVolume(e) {
    this.setState({ volume: parseFloat(e.target.value) });
  }

  volume(){
    return(
      <i className="fa fa-volume-up" aria-hidden="true"></i>
    );
  }

  render(){
    // debugger;
    return (
      <div className="taskbar">
        <ReactPlayer url={this.props.trackPlayer.track_url}
          ref={player => { this.player = player; }}
          playing={this.state.playing}
          width={0}
          height={0}
          hidden={false}
          className="sound-player"
          volume={this.state.volume}
          onProgress={this.onProgress}
        />
        <div className='bottom-centered-content'>
          <section className="track-controls">
            <button
              className="play-button"
              onClick={this.playPause}>{this.playPauseIcon()}
            </button>

            <label className="track-slider">
              {this.volume()}
              <input type="range" min={0} max={1} step='any'
                value={this.state.volume}
                onChange={this.setVolume}
                className="input-slider"/>
            </label>
          </section>

          <section className="artist-info-section">
            <img src={this.props.trackPlayerArtist.image_url}
              className="small-artist-image"></img>
            <Link to={`/artists/${this.props.trackPlayerArtist.id}`}
              className="link-to-artist">
              <div className='artist-thumbnail-name'>{this.props.trackPlayerArtist.name}</div>
              <div className='artist-song-separator'>{this.props.trackPlaying ? " - " : ""}</div>
              <div className='track-thumbnail-name'>{this.props.trackPlayer.name}</div>
            </Link>
          </section>
        </div>


        <div className='small-logo'>TH</div>
      </div>
    );
  }
}

export default withRouter(TrackPlayer);
