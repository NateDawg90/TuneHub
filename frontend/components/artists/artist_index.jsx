import React, { Component } from 'react';
import ArtistIndexItem from './artist_index_item';
import {Link} from 'react-router';

class ArtistsIndex extends Component {
  componentDidMount() {
    this.props.fetchSampleArtists();
  }

  signup(){
    if (this.props.loggedIn){
      this.props.router.push(`/artists/${this.props.loggedIn.id}`);
    } else {
      this.props.router.push("/signup");
    }
  }

  render() {
    const { artists, children } = this.props;
    return (
      <section className="artist-index">
        <div className="video-container">
          <h3>Discover Your favorite Music!</h3>
          <Link
            className='splash-login'
            to="/signup"
            activeClassName="current">Sign Up!
          </Link>

          <video src="http://res.cloudinary.com/njohnson90/video/upload/v1484632582/Steven_Wilson_-_The_Holy_Drinker_Live_in_Frankfurt_prxrdq.mp4"
            autoPlay
            muted
            loop
            className="video"/>
        </div>
        <div className="artist-display">
          <h1>Check Out Artist Profiles!</h1>
          <ul className='artist-profiles-container'>
            {artists.map(artist => <ArtistIndexItem key={artist.id} artist={artist} />)}
          </ul>

        </div>

        {children}
      </section>
    );
  }
}

export default ArtistsIndex;

// <video className='welcome-video' autoPlay muted loop>
//   <source src='video_url' type='video/mp4' />
// </video>
