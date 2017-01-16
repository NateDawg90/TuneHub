import React from 'react';
import { Link } from 'react-router';

const ArtistIndexItem = ({ artist, router }) => (
  <li className="artist-index-item">
    <Link to={`/artists/${artist.id}`}>
      <span>{artist.id}</span>
      <img src={artist.image_url} alt={artist.name}>

      </img>
      <span>{artist.name}</span>
    </Link>
  </li>
);

export default ArtistIndexItem;
