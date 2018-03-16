import React from 'react';
import TrackIndexItem from './track_index_item';
import {withRouter} from 'react-router';

class TrackIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  artistTracks(){
    let that = this;
    return (
      this.props.tracks.map(function(track, idx){
        return <TrackIndexItem
          track={track}
          key={idx}
          currentTrack={that.props.trackPlayer}
          playing={that.props.trackPlaying}
          artist={that.props.props.artist}
          addTrack={that.props.props.addTrackToQueue}
          pauseTrack={that.props.props.pauseTrack} />;
      })
    );
  }

  handleClick(url){
    return function(e){
      this.props.router.push(url);
    };
  }

  // uploadNewTrackButton(){
  //   const props = this.props.props;
  //   if (props.currentUser.id === props.artist.id){
  //     return (
  //     <button
  //       onClick={this.handleClick(`/artists/${props.currentUser.id}/newtrack`).bind(this)}>Upload New Track</button>
  //     );
  //   } else {
  //     return null;
  //   }
  // }
  //
  // uploadTrack(url){
  //   const track_url = url;
  //   const track = {track: {track_url, artist_id: this.props.props.currentUser.id}, artist_id: this.props.props.currentUser.id};
  //   this.props.props.newTrack(track);
  // }


  render(){
    let that = this;
    return (
      <div className="mh3">
        <ul>
          {this.artistTracks()}
        </ul>
      </div>
    );
  }
}


export default withRouter(TrackIndex);
