import React from 'react';
import { Link } from 'react-router';

const ProfileArtistItem = ({ artist, router }) => {
  return (
    <div className="pa3 f3 flex w-100">
      <Link to={`/artists/${artist.id}`} className='flex justify-between w-100 ma1 items-center no-underline'>
        <img className=' ba bw1 detail-image link dim black' src={artist.image_url}></img>
        <div className='f2 mr3 '>{artist.name}</div>
      </Link>
    </div>
  );
};

export default ProfileArtistItem;
