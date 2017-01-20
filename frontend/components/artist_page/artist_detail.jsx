import React from 'react';
import TrackIndex from '../tracks/track_index';

class ArtistDetail extends React.Component {
  constructor(props){
    super(props);
    let currentFollow = (props.artist.followers.includes(props.currentUser) ? true : false);
    this.state = {
                  images: [],
                  follow: currentFollow
                };
    this.activateEdit = this.activateEdit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.isFollowing = this.isFollowing.bind(this);
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

  componentWillMount(){
    this.props.requestArtist(this.props.artistId);
  }

  // isFollowing() {
  //   let followers = this.props.artist.followers;
  //   // console.log(followers);
  //   // console.log(this.props.currentUser);
  //   if (followers[this.props.currentUser] !== undefined) {
  //     this.setState({follow: true});
  //     // debugger;
  //   } else {
  //     this.setState({follow: false});
  //     // debugger;
  //   }
  // }

  handleClick(e) {
    e.preventDefault();
    let { currentUser, artistId } = this.props;
    let data = {fan_id: this.props.currentUser.id, artist_id: this.props.artistId};
    if (this.state.follow === true) {
      this.props.unFollow(this.props.artistId).then(res => this.props.requestArtist(this.props.artistId));
      this.setState({follow: false});
    } else {
      this.props.follow(data).then(res => this.props.requestArtist(this.props.artistId));
      this.setState({follow: true});
    }
  }

  followButton() {
    // debugger;
    if (this.props.currentUser && this.props.artist.id !== "") {
      debugger;
      return (
        <div className='follow-button'>

          <button
            onClick={this.handleClick}>
            {this.state.follow === true ? "Unfollow" : "Follow"}
          </button>

        </div>
      );

    }
  }

  image(){
    // debugger;
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
            <div className='follows'>
              <div
                className='followers'>{this.props.artist.followers.length}
                {this.props.artist.followers.length === 1 ? " Follower" : " Followers"}
              </div>

              {this.followButton()}

            </div>
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
// {this.props.currentUser ? this.followButton() : ""}

// {this.props.children}

export default ArtistDetail;
