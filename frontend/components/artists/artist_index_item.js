import React from 'react';
import { Link } from 'react-router';

const ArtistIndexItem = ({ artist, router }) => {
  return (
    <div className="artist-index-item">
      <Link to={`/artists/${artist.id}`} className='sample-link'>
        <img className='ba bw1 sample-image' src={artist.image_url}></img>
        <div className='sample-name'>{artist.name}</div>
      </Link>
    </div>

  );
};
// <div className={"play-button-image"}
//   onClick={this.playSong(this.props.artist.song, this.props.artist)}>
//   <span className="fa-stack fa-lg">
//     <i className="fa fa-circle fa-stack-2x"></i>
//     <i className="fa fa-play fa-stack-1x"></i>
//   </span>
// </div>

export default ArtistIndexItem;
