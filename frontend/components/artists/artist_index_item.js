import React from 'react';
import { Link } from 'react-router';

const ArtistIndexItem = ({ artist, router }) => {
  return (
    <div className=" f3 black ma1">
      <Link to={`/artists/${artist.id}`} className='no-underline bn'>
        <img className='ba bw1 detail-image link dim black' src={artist.image_url}></img>
        <div className='f2 mr3 '>{artist.name}</div>
      </Link>
    </div>

  
  );
};

export default ArtistIndexItem;
