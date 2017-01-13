import React from 'react';

class ArtistNav extends React.Component {
  render () {
    return (
      <nav>
        { this.props.name }
        { this.props.bio }
      </nav>
    );
  }
}

export default ArtistNav;
