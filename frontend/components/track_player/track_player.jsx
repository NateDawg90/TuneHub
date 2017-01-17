import React from 'react';
import ReactPlayer from 'react-player';
import {Link} from 'react-router';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    playing: true,
    volume: 0.1,
    played: 0,
    loaded: 0,
    };
    this.playPause = this.playPause.bind(this);
    this.stop = this.stop.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.onSeekMouseDown = this.onSeekMouseDown.bind(this);
    this.onSeekChange = this.onSeekChange.bind(this);
    this.onSeekMouseUp = this.onSeekMouseUp.bind(this);
    this.onProgress = this.onProgress.bind(this);
  }

//incoming props playing is true, then setstate to be true.
  componentWillReceiveProps(){
    if (this.props.track_playing){
     this.setState({playing: true});
    }
  }

  playPause(){
    this.setState({ playing: !this.state.playing })
  }

  stop(){
    this.setState({ url: null, playing: false })
  }

  setVolume(e){
    this.setState({ volume: parseFloat(e.target.value) })
  }

  onSeekMouseDown(e) {
    this.setState({ seeking: true })
  }

  onSeekChange(e){
    this.setState({ played: parseFloat(e.target.value) });
  }

  onSeekMouseUp(e) {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  }

  onProgress(nextState) {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(nextState);
    }
  }

  pause(){
    return(
      <i className="fa fa-pause"></i>
    );
  }

  play(){
    return(
      <i className="fa fa-play" ></i>
    );
  }

  volume(){
    return(
      <i className="fa fa-volume-up" aria-hidden="true"></i>
    );
  }


  render(){
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

        <section className="track-controls group">
          <button
            className="play-button"
            onClick={this.playPause}>{this.state.playing ? this.pause() : this.play()}
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
                className={"link-to-artist"}>
                {this.props.trackPlayerArtist.name}
          </Link>
        </section>
      </div>
    );
  }
}
