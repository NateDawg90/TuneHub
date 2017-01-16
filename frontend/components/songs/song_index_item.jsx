import React from 'react';


class SongIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.dispatchSong = this.dispatchSong.bind(this);
  }


  dispatchSong(song, artist){
    return (e) => {
      this.props.addSong(song, artist);
    };
  }


  render(){
    return (
      <div className="song-item">
        <label className="title">{this.props.song.title} &nbsp;
        </label>
        <br></br>
        
      </div>
    );
  }
}
// <div className="util-section">
//   {this.props.edit ? this.deleteButton(this.props.song) : null}
//   {this.props.download ? this.downloadButton(this.props.song) : null}
//   <br></br>
// <div className="song-player">
//   <button onClick={this.dispatchSong(this.props.song, this.props.artist)}
//     className="play-click">Play</button>
// </div>
export default SongIndexItem;
