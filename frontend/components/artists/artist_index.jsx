import React, { Component } from 'react';
import ArtistIndexItem from './artist_index_item';

class ArtistsIndex extends Component {
  componentDidMount() {
    this.props.requestAllArtists();
  }

  render() {
    const { artists, children } = this.props;
    return <section className="artist-index">
              <ul>
                {artists.map(artist => <ArtistsIndexItem key={artist.id} artist={artist} />)}
              </ul>
              {children}
            </section>
  }
}

export default ArtistsIndex;
