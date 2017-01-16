import React from 'react';
import SongIndexItem from './song_index_item';
import {withRouter} from 'react-router';


class SongIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  artistTracks(){
    let that = this;
    this.props.props.artist.tracks.map(function(track, idx){
      return (
        <div className="song-item">
          <label className="title">{track.title} &nbsp;
          </label>
          <span className="play-button">Play</span>
          <br></br>
          <br></br>
        </div>
      );
    });
  }

  handleClick(url){
    return function(e){
      this.props.router.push(url);
    };
  }

  uploadNewSongButton(){
    if (this.props.props.currentUser.id === this.props.props.artist.id){
      return (
      <button onClick={this.handleClick(`/artists/${this.props.props.currentUser.id}/newsong`).bind(this)}>Upload New Song</button>
      );
    } else {
      return null;
    }
  }
  uploadSong(url){
    const song_url = url;
    const song = {song: {song_url, artist_id: this.props.props.currentUser.id}, artist_id: this.props.props.currentUser.id};
    this.props.props.newSong(song);
  }


  render(){
    let that = this;
    return (
      <div className="songs-box">
        <ul>
          {this.artistTracks()}
        </ul>
      </div>
    );
  }
}


export default withRouter(SongIndex);
