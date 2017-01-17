import React from 'react';


class TrackIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.dispatchTrack = this.dispatchTrack.bind(this);
  }

  dispatchTrack(track, artist){
    return (e) => {
      this.props.addTrack(track, artist);
    };
  }

  render(){
    return (
      <div className="track-item">
        <label className="title">{this.props.track.name} &nbsp;
        </label>
        <br></br>
        <div className="track-player">
          <button
            onClick={this.dispatchTrack(this.props.track, this.props.artist)}
            className="play-click">Play</button>
        </div>

      </div>
    );
  }
}

export default TrackIndexItem;
