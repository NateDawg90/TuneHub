import React from 'react';
import TrackIndex from '../tracks/track_index';

class ArtistDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {edit: false,
                  images: [],
                  editTracks: false};
    this.activateEdit = this.activateEdit.bind(this);
  }

  activateEdit(){
    if(this.state.edit === false){
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


  cancel(){
    return (
        <button onClick={this.activateEdit}
                className="finish-edit">Finish Editing</button>
    );
  }

  cancelEditTracks(){
    return (
        <button onClick={this.editTracks.bind(this)}
                className="edit-tracks-cancel">Cancel</button>
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

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    return (
      <div className="artist-detail">
        <div className="artist-header">
          {this.artistHeader()}
          {this.image()}
        </div>

        <div className='artist-body'>
          <div className="left-hand-container">
            <header className="tracks-header">
              Tracks
            </header>
            <ul>
              <TrackIndex props={this.props} />
            </ul>
          </div>

          <div className="right-hand-container">
            <span className='description-header'>Description</span>

            <div className='description'>{this.props.artist.description}</div>
          </div>

        </div>
      </div>
    );
  }
}

// {this.props.children}

export default ArtistDetail;
