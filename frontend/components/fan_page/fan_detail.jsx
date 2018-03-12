import React from 'react';
import ArtistIndexItem from './../artists/artist_index_item';

class FanDetail extends React.Component {
  constructor(props){
    super(props);
    this.props.requestUser(this.props.currentUser.id);
  }

  fanHeader() {
    return (
      <h1>{this.props.currentUser ? this.props.currentUser.username : "null"}</h1>
    );
  }

  render(){
    const followedArtists = (this.props.currentUser ? this.props.currentUser.followed_artists : []);
    return (
      <div className="w-100 w-80-ns flex flex-column mt5 ph3 ph2-ns" > 
        <div className="flex justify-between items-center mb3">
          <div className='f3'>
            {this.fanHeader()}
          </div>
          <div
            className='f4'>{followedArtists.length}
            {followedArtists.length === 1 ? "Followed Artist" : " Followed Artists"}
          </div>
        </div>

        <ul className='ba b--black bw2'>
          {followedArtists.map(artist => {
            return (
              <div key={artist.id} className='flex flex-column items-center w-100'>
                <ArtistIndexItem  artist={artist} image={artist.image_url} />
                <div className='w-100 ba bw1 b--black'></div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FanDetail;
