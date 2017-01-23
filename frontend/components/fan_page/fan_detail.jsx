import React from 'react';
import ArtistIndexItem from './../artists/artist_index_item';

class FanDetail extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    
  }

  fanHeader() {
    return (
      <h1>{this.props.currentUser.username}</h1>
    );
  }

  render(){
    const followedArtists = this.props.currentUser.followed_artists;
    // debugger;
    return (
      <div className="fan-detail">
        <div className="fan-header">
          <div className='fan-name-container'>
            {this.fanHeader()}
          </div>
          <div
            className='followed-artists'>{followedArtists.length}
            {followedArtists.length === 1 ? " Followed Artist" : " Followed Artists"}
          </div>
        </div>

        <ul className='followed-artists-container'>
          {followedArtists.map(artist => {
            return (
              <div key={artist.id} className='followed-artist-link'>
                <ArtistIndexItem  artist={artist} image={artist.image_url} />
                <div className='artist-divider'></div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FanDetail;
