import React from 'react';
import TrackIndex from '../tracks/track_index';
import TrackIndexContainer from '../tracks/track_index_container';

class ArtistDetail extends React.Component {
  constructor(props){
    super(props);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnFollow = this.handleUnFollow.bind(this);
  }


  componentDidMount() {
    this.props.requestArtist(this.props.artistId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.follow !== nextProps.follow) {
      this.props.requestArtist(nextProps.artistId);
    }
  }

  handleFollow(e) {
    let data = {fan_id: this.props.currentUser.id, artist_id: this.props.artistId};
    this.props.newFollow(data);
  }

  handleUnFollow(e) {
    this.props.unFollow(this.props.artistId);
  }

  followButton() {
    if (this.props.currentUser && this.props.artist.id !== "") {
      if (this.getFollowState() === "follow") {
        return (
            <button
              className='pa2 ph3 white f5 bg-purple b br4 shadow-3 bg-animate pointer hover-bg-light-gray link'
              onClick={this.handleFollow}>
              Follow
            </button>
        );
      } else {
        return (
            <button
              className=' pa2 ph3 ma1 white f5 bg-purple b br4 shadow-3 bg-animate pointer hover-bg-light-gray'
              onClick={this.handleUnFollow}>
              Unfollow
            </button>
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
    return (
    <div className="detail-image">
      <img  src={this.props.artist.image_url}></img>
    </div>);
  }

  update(field){
    return function(e) {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  render(){
    return (
      <div className='w-80-ns pt5 mt4 ph4 flex flex-wrap top-1'>
        <div className='flex justify-between pb3 mb3 w-100 bb bw2'>
          <div className='bg-light-gray border-box ba bw1 b--gray  flex flex-column w-40'>
            <h2 className='bb bw1 f2 b ma4'>{this.props.artist.name}</h2>
            <div className='flex flex-column items-center justify-center h-100 '>
              <div className='mb3 tc f3'>
                {this.props.artist.followers.length}
                {this.props.artist.followers.length === 1 ? ' Follower' : ' Followers'}
              </div>
              {this.followButton()}
            </div>
          </div>
          <div>
            {this.image()}
          </div>
        </div>

        <div className='cf w-100'>
          <div className="fl bg-light-gray flex flex-column w-100 w-50-ns ba bw1 b--gray border-box f4">
            <h2 className="bb bw1 f2 b ma4">Tracks</h2>
            <ul>
              <TrackIndexContainer props={this.props} />
            </ul>
          </div>

          <div className='fr flex flex-column w-100 w-40-ns mt3 mt0-ns border-box'>
            <div className='flex flex-column ba bw1 b--gray bg-light-gray'>
              <h2 className=' bb bw1 f2 b ma4'>Description</h2>
              <div className='f4 pa3 tc'>{this.props.artist.description}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistDetail;
