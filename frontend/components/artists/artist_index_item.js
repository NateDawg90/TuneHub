import React from 'react';
import { Link } from 'react-router';

const ArtistIndexItem = ({ artist, router }) => {
  return (
      <Link to={`/artists/${artist.id}`} className='no-underline bn f3 black ma1 artist-width'>
        <img className=' detail-image link dim black' src={artist.image_url}></img>
        <div className='f4 b mr3 '>{artist.name}</div>
      </Link>
  );
};

export default ArtistIndexItem;
