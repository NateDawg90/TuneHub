import React from 'react';
import SongIndex from '../songs/song_index';

class ArtistDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {edit: false,
                  images: [],
                  editTracks: false};
    this.activateEdit = this.activateEdit.bind(this);
  }

  activateEdit(){
    if(this.state.edit ===false){
      this.setState({edit: true});
    } else {
      this.setState({edit: false});
    }
  }

  artistHeader(){
    return (
      <h1>{this.props.artist.name}</h1>
    );
  }

  // <SongIndexItem track={track}
  //   key={idx}
  //   edit={that.props.edit}
  //   deleteSong={that.props.props.deleteSong}
  //   addSong = {that.props.props.addSongToQueue}
  //   artist = {that.props.props.artist}/>;
  // <div className="track-player">
  //   <button onClick={this.dispatchSong(track, this.props.artist)}
  //     className="play-click">Play</button>
  // </div>

  description(){
    return (
      <p className="text">
        {this.props.artist.description}
      </p>
    );
  }

  cancel(){
    return (
        <button onClick={this.activateEdit}
                className="finish-edit">Finish Editing</button>
    );
  }

  cancelEditTracks(){
    return (
        <button onClick={this.editTracks.bind(this)}
                className="edit-songs-cancel">Cancel</button>
    );
  }

  componentDidMount() {
    this.props.requestArtist(this.props.artistId);
  }

  componentWillMount(){
    this.setState({edit: false});
  }

  image(){
    return (
    <div className="detail-image">
      <img src={this.props.artist.image_url}></img>
    </div>);
  }

  location(){
    return (
      <p className="artist-location">
        {this.props.artist.location}
      </p>
    );
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    return (
      <div className="artist-info">
        <div className="artist-header">
          {this.artistHeader()}
        </div>
        <div className="left-hand-container">

          {this.image()}

          <br></br>
          <br></br>
          <div className="description">Description
            {this.location()}
            <br></br>
            <br></br>
            {this.description()}
          </div>
        </div>

        <div className="right-hand-container">

          <div className="songindex">
            <header className="songs-header">
              Tracks&nbsp;&nbsp;&nbsp;
            </header>
            <ul>
              <SongIndex props={this.props} />
            </ul>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}


export default ArtistDetail;
