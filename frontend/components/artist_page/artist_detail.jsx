import React from 'react';
import TrackIndex from '../tracks/track_index';

class ArtistDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
                  images: [],
                  follow: false
                };
    this.activateEdit = this.activateEdit.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    // // debugger;
    // let followed_artists = this.props.currentUser.followed_artists;
    //
    // if (followed_artists.includes(this.props.artist)) {
    //   this.setState({follow: true});
    // } else {
    //   this.setState({follow: false});
    // }
  }

  isfollowing() {
    // let currentUser = this.props.currentUser;
    // if (currentUser.followed_artists.includes())
  }

  handleClick() {
    debugger;
    let follow = {fan_id: this.props.currentUser.id, artist_id: this.props.artistId};
    if (this.state.follow) {
      this.props.unfollow(follow);
    } else {
      this.props.follow(follow);
    }
  }

  followButton() {
    // debugger;
    return (
      <div className='follow-button'>
        <button
          onClick={this.handleClick}>
          {this.state.follow ? "Unfollow" : "Follow"}
        </button>
      </div>
    );
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
          <div className='artist-name-container'>
            {this.artistHeader()}
            {this.followButton()}
          </div>
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
