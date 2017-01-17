import React from 'react';
import { Link } from 'react-router';

const ArtistIndexItem = ({ artist, router }) => (
  <li className="artist-index-item">
    <Link to={`/artists/${artist.id}`}>
      <span>{artist.id}</span>
      <img
        className='detail-image'
        src={artist.image_url}
        alt={artist.name}>
      </img>
      <span>{artist.name}</span>
    </Link>
  </li>

);

export default ArtistIndexItem;
// <li className="sample-artist">
//   <div className="play-button-image"
//     onClick={this.playSong(this.props.artist.song, this.props.artist)}>
//     <span className="fa-stack fa-lg">
//       <i className="fa fa-circle fa-stack-2x"></i>
//       <i className="fa fa-play fa-stack-1x"></i>
//     </span>
//   </div>
//   <img src={this.props.artist.image_url}
//     className={"sample-artist-image"}
//     onClick={this.playSong(this.props.artist.song, this.props.artist)}>
//   </img>
//
//   <br></br>
//   <Link to={`/artists/${this.props.artist.id}`}>{this.props.artist.name}</Link>
// </li>
