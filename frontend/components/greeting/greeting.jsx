import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import SearchContainer from '../search/search_container';

class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout().then(() => hashHistory.push("/login"));
  }

  sessionLinks() {
    return (
      <nav className="login-signup">
        <Link className='login-button' to="/login" activeClassName="current">Login</Link>
        <div className='or'>or</div>
        <Link className='login-button' to="/signup" activeClassName="current">Sign up!</Link>
      </nav>
    );
  }

  personalGreeting(currentUser, logout) {
    return (
      <hgroup className="header-group">

        <h2 className="hi">Hi, </h2>
        <Link to={`/fans/${currentUser.id}`} className='profile-link'>
          <div className='username'>{currentUser.username}</div>
        </Link>
        <button className="logout-button" onClick={this.handleLogout}>Log Out</button>
      </hgroup>
    );
  }

  render() {
    return (
      <div className='header'>
        <div className="left-nav">
          <Link to="/" className="header-link">
            <div className='splash-logo'></div>
            <h2 className='tunehub'>TuneHub</h2>
          </Link>
          <span className='slogan'>Connecting people with tunes and their creators
          </span>
        </div>
        {this.props.currentUser ? this.personalGreeting(this.props.currentUser, this.props.logout) : this.sessionLinks()}

      </div>
    );
  }
}



export default withRouter(Greeting);
