import React from 'react';
import TrackIndex from '../tracks/track_index';

class FanDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
                  images: [],
                  follow: false
                };
    this.activateEdit = this.activateEdit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  userHeader(){
    return (
      <h1>{this.props.user.name}</h1>
    );
  }

  componentDidMount() {
    this.props.requestFan(this.props.userId);
  }



  render(){
    return (
      <div className="user-detail">
        <div className="user-header">
          <div className='user-name-container'>
            {this.userHeader()}
            {this.followButton()}
          </div>
          {this.image()}
        </div>

        <div className='user-body'>
          <div className="left-hand-container">
            <header className="tracks-header">
              Tracks
            </header>
            <ul>
              <TrackIndex props={this.props} />
            </ul>
          </div>

          <div className="right-hand-container">
            <span className='description-header'>Description</span>

            <div className='description'>{this.props.user.description}</div>
          </div>

        </div>
      </div>
    );
  }
}

// {this.props.children}

export default FanDetail;
