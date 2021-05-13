import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParams: ''
    };
    this.update = this.update.bind(this);
  }

  update() {
    return e => {
      this.setState({ ['searchParams']: e.target.value });
      this.props.updateSearch(e.target.value);
    };
  }

  render() {
    return(
      <div className='w-100 flex items-center'>
        <input
          className='f4 flex-auto'
          type='text'
          placeholder='Search Now'
          onChange={this.update()} />
        <i className="fa fa-search f4 ml1" aria-hidden="true"/>
      </div>
    );
  }
}

export default Search;
