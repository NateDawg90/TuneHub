import React, { Component } from 'react';
import ArtistIndexItem from './artist_index_item';

class ArtistsIndex extends Component {
  componentDidMount() {
    this.props.fetchArtists();
    debugger;
  }

  render() {
    const { artists, children } = this.props;
    return (
      <section className="artist-index">
        <div className="video-container">
          <div className="home-page-message">
            <h3>Find music you love</h3>
          </div>
          <h1>Discover Your favorite Music!</h1>
            <video src="https://s3-us-west-1.amazonaws.com/musicianhub/musicianhubvid.mp4"
              autoPlay
              loop
              className="video"/>
        </div>
        <div className="video-mask">

        </div>
        <ul>
          {artists.map(artist => <ArtistIndexItem key={artist.id} artist={artist} />)}
        </ul>
        {children}
      </section>
    );
  }
}

export default ArtistsIndex;

// <video className='welcome-video' autoPlay muted loop>
//   <source src='video_url' type='video/mp4' />
// </video>
