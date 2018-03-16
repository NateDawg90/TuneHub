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
    this.playPause = this.playPause.bind(this);
    this.stop = this.stop.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.playPauseIcon = this.playPauseIcon.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    this.setState({playing: nextProps.trackPlaying});
  }

  playPause() {
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
        <i className="fa fa-pause f3 white dim"></i>
      );
    } else {
      return(
        <i className="fa fa-play f3 white dim" ></i>
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
      <i className="fa fa-volume-up f3 white ma2" aria-hidden="true"></i>
    );
  }

  render(){
    return (
      <div className="w-100 z-5 bg-black fixed flex items-center bottom-0 footer">
        <ReactPlayer url={this.props.trackPlayer.track_url}
          ref={player => { this.player = player; }}
          playing={this.state.playing}
          width={0}
          height={0}
          hidden={false}
          volume={this.state.volume}
          onProgress={this.onProgress}
        />
        <div className='flex items-center justify-around h-100 w-100'>
          <section className="flex items-center ">
            <button
              className="bg-black bw0 outline-0 pointer mr3"
              onClick={this.playPause}>{this.playPauseIcon()}
            </button>

            <label className="flex items-center">
              {this.volume()}
              <input type="range" min={0} max={1} step='any'
                value={this.state.volume}
                onChange={this.setVolume}/>
            </label>
          </section>

          <section className="h-100 flex items-center justify-around">
            <img src={this.props.trackPlayerArtist.image_url}
              className="h-100 bn "></img>
            <Link to={`/artists/${this.props.trackPlayerArtist.id}`}
              className="flex no-underline white ml3 dim">
              <div className='b ml2 '>{this.props.trackPlayerArtist.name}</div>
              <div className='ml2'>{this.props.trackPlaying ? " - " : ""}</div>
              <div className='ml2'>{this.props.trackPlayer.name}</div>
            </Link>
          </section>
        </div>


        <div className='bungee white ml-auto mr2 f3'>TH</div>
      </div>
    );
  }
}

export default withRouter(TrackPlayer);
