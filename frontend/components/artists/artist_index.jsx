import React, { Component } from 'react';
import ArtistIndexItem from './artist_index_item';
import {Link, withRouter} from 'react-router';
import SearchContainer from '../search/search_container';


class ArtistsIndex extends Component {
  componentDidMount() {
    this.props.fetchSampleArtists();

    this.loginDemo = this.loginDemo.bind(this);
  }

  demoButton() {
    return (
      <button
        className='pa2 bg-purple white f2 b bn br3 shadow-hover outline-0'
        onClick={this.loginDemo}>Demo!
      </button>
    
    );
  }

  loginDemo() {
    let user = { username: 'demo', password: 'password123' };
    this.props.login({user})
      .fail(err => console.log(err));
  }

  render() {
    const { artists, children, currentUser } = this.props;
    return (
      <section className="flex w-100 flex-column items-center mt4">
        <div className="w-100 relative left-0 top-0 tc overflow-hidden" >
          <div className=' absolute z-3 left-0 top-0 w-100 h-100 overflow-auto bg-black-50 flex flex-column justify-center items-center'>
            <h1 className='f1 white b w-100 tc'>Discover Your favorite Tunes!</h1>
            {!currentUser ? this.demoButton() : ""}
          
          </div>
          <video className="w-100 " src="http://res.cloudinary.com/njohnson90/video/upload/ac_none,vc_auto,fl_lossy,q_60,w_1280/Steven_Wilson_-_The_Holy_Drinker_Live_in_Frankfurt_online-video-cutter.com_pogpnj.webm" autoPlay muted loop/>
        </div>
        <div className='w-100 w-80-ns pv3 ph4 flex justify-around items-center'>
          <h1 className='w-50 mr3 f2'>Find Artists to Follow</h1>
          <div className='w-50'>
            <SearchContainer/>
          </div>
        </div>
        <div className="f4 b w-100 tc flex flex-column">
          <ul className='flex justify-around flex-wrap'>
            {artists.map(artist => <ArtistIndexItem key={artist.id} artist={artist} image={artist.image_url} />)}
          </ul>

        </div>

        {children}

      </section>
    );
  }
}

export default ArtistsIndex;
