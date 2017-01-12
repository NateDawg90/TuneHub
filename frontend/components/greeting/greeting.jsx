import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <div className='header'>
    <div className="left-nav">
      <Link to="/" className="header-link">
        <div className='splash-logo'></div>
        <h1 className='tunehub'>TuneHub</h1>
      </Link>
      <span className='slogan'>Connecting people with tunes and their creators
      </span>
    </div>

    <nav className="login-signup">
      <Link to="/login" activeClassName="current">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup" activeClassName="current">Sign up!</Link>
    </nav>

  </div>
);

const personalGreeting = (currentUser, logout) => (
  <div className='header'>
    <div className="left-nav">
      <div className='splash-logo'></div>
      <Link to="/" className="header-link">
        <h1>TuneHub</h1>
      </Link>
    </div>

    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>

  </div>
);

const Greeting = ({ currentUser, logout }) => (

  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
