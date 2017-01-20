import React, { Component } from 'react';
import ArtistIndexItem from './artist_index_item';
import {Link} from 'react-router';
import SearchContainer from '../search/search_container';


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

  signUpButton() {
    return (
      <Link
        className='splash-login'
        to="/signup"
        activeClassName="current">Sign Up!
      </Link>
    );
  }

  render() {
    const { artists, children, currentUser } = this.props;
    return (
      <section className="artist-index">
        <div className="video-container">
          <h3>Discover Your favorite Tunes!</h3>
          {!currentUser ? this.signUpButton() : ""}

          <video src="http://res.cloudinary.com/njohnson90/video/upload/v1484679861/Steven_Wilson_-_The_Holy_Drinker_Live_in_Frankfurt_online-video-cutter.com_pogpnj.mp4"
            autoPlay
            muted
            loop
            className="video"/>
        </div>
        <div className='artist-search'>
          <h1>Find Artists to Follow</h1>
          <SearchContainer className='search-container'/>
        </div>
        <div className="artist-display">
          <ul className='artist-profiles-container'>
            {artists.map(artist => <ArtistIndexItem key={artist.id} artist={artist} image={artist.image_url} />)}
          </ul>

        </div>

        {children}

      </section>
    );
  }
}

export default ArtistsIndex;
