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
      <nav className="flex items-center mh3">
        <Link className='pa2 mr2 white f5 b br3 bg-purple no-underline shadow-1 relative shadow-hover' to="/login" activeClassName="current">
          Login
        </Link>
        or
        <Link className='pa2 ml2 white f5 b br3 bg-purple no-underline shadow-1 relative shadow-hover' to="/signup" activeClassName="current">
          Sign up!
        </Link>
      </nav>
    );
  }

  fix() {
    var par = this.parentNode;
    var next = this.nextSibling;
    par.removeChild(this);
    setTimeout(function() {par.insertBefore(this, next);}, 0)
  }

  personalGreeting(currentUser, logout) {
    return (
      <nav className="flex justify-between items-center mh3">

        <h2 className='mr2'>Hi, </h2>
        <Link to={`/fans/${currentUser.id}`} >
          <div>{currentUser.username}</div>
        </Link>
        <Link className="pa2 ml2 white f5 b br3 bg-purple no-underline shadow-1 relative shadow-hover" onClick={this.handleLogout}>
          Log Out
        </Link>
      </nav>
    );
  }

  render() {
    return (
      <div className='flex justify-between items-center w-100 black bg-white fixed bb b--grey border-box header-shadow z-5'>
        <div className="flex items-center">
          <Link to="/" className="no-underline bungee f2 flex items-center black b ma1">
            <div className='splash-logo mh2'></div>
            <h2 className='ml2'>TuneHub</h2>
          </Link>
          <span className='f6 b self-end ml3 mb1 purple'>Connecting people with tunes and their creators
          </span>
        </div>
        {this.props.currentUser ? this.personalGreeting(this.props.currentUser, this.props.logout) : this.sessionLinks()}

      </div>
    );
  }
}



export default withRouter(Greeting);
