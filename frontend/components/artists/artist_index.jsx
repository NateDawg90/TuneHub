import React, { Component } from 'react';
import ArtistIndexItem from './artist_index_item';
import {Link, withRouter} from 'react-router';
import SearchContainer from '../search/search_container';


class ArtistsIndex extends Component {
  componentDidMount() {
    this.props.fetchSampleArtists();

    this.loginDemo = this.loginDemo.bind(this);
  }

  signup(){
    if (this.props.loggedIn){
      this.props.router.push(`/artists/${this.props.loggedIn.id}`);
    } else {
      this.props.router.push("/signup");
    }
  }

  demoButton() {
    return (
      <button
        className='demo-login'
        onClick={this.loginDemo}>Demo!
      </button>
    );
  }

  loginDemo() {
    debugger;
    let user = { username: 'demo', password: 'password123' };
    this.props.login({user})
      .fail(err => console.log(err));
  }

  render() {
    const { artists, children, currentUser } = this.props;
    return (
      <section className="artist-index">
        <div className="video-container">
          <h3>Discover Your favorite Tunes!</h3>
          {!currentUser ? this.demoButton() : ""}

          <video src="http://res.cloudinary.com/njohnson90/video/upload/ac_none,vc_auto,fl_lossy,q_60,w_1280/Steven_Wilson_-_The_Holy_Drinker_Live_in_Frankfurt_online-video-cutter.com_pogpnj.webm"
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
