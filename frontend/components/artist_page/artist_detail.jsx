import React from 'react';
import TrackIndex from '../tracks/track_index';

class ArtistDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
                  images: [],
                  follow: this.isFollowing(),
                  done: true
                };
                // debugger;
    this.activateEdit = this.activateEdit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.isFollowing = this.isFollowing.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnFollow = this.handleUnFollow.bind(this);
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

  componentDidMount() {
    this.props.requestArtist(this.props.artistId);
  }

  componentWillReceiveProps(nextProps) {
    debugger;
    if (this.props.artist !== nextProps.artist) {
      this.props.requestArtist(nextProps.artistId);
      // debugger;
    }
  }

  isFollowing() {
    let followers = this.props.artist.followers;
    for (var i = 0; i < followers.length; i++) {
      if (followers[i].id === this.props.currentUser.id) {
        return true;
      }
    }
    return false;
  }

  handleClick(e) {
    e.preventDefault();
    let { currentUser, artistId } = this.props;
    let data = {fan_id: this.props.currentUser.id, artist_id: this.props.artistId};
    // debugger;
    if (this.props.follow) {
      this.props.newFollow(data).then(this.setState({follow: true}));
    } else {
      this.props.unFollow(this.props.artistId).then(this.setState({follow: false}));

    }
  }

  handleFollow(e) {
    let data = {fan_id: this.props.currentUser.id, artist_id: this.props.artistId};
    this.props.newFollow(data);
  }

  handleUnFollow(e) {
    // debugger;
    this.props.unFollow(this.props.artistId);
  }


  followButton() {
    // debugger;
    if (this.props.currentUser && this.props.artist.id !== "") {
      // debugger;
      if (this.getFollowState() === "follow") {
        return (
          <div className='follow-button'>
            <button
              onClick={this.handleFollow}>
              Follow
            </button>

          </div>
        );
      } else {
        // debugger;
        return (
          <div className='follow-button'>
            <button
              onClick={this.handleUnFollow}>
              Unfollow
            </button>

          </div>
        );
      }

    }
  }

  getFollowState() {
    if (this.props.artist.followers.find( (follower) => {
      return follower.id === this.props.currentUser.id;
    })) {
      return "unfollow";
    } else {
      return "follow";
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
