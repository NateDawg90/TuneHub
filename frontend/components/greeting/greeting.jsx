import React from 'react';
import { Link } from 'react-router';
import SearchContainer from '../search/search_container';

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
    <SearchContainer className='search-container'/>
    <nav className="login-signup">
      <Link className='login-button' to="/login" activeClassName="current">Login</Link>
      <div className='or'>or</div>
      <Link className='login-button' to="/signup" activeClassName="current">Sign up!</Link>
    </nav>

  </div>
);

const personalGreeting = (currentUser, logout) => (
  <div className='header'>
    <div className="left-nav">
      <Link to="/" className="header-link">
        <div className='splash-logo'></div>
        <h1 className='tunehub'>TuneHub</h1>
      </Link>
      <span className='slogan'>Connecting people with tunes and their creators
      </span>
    </div>
    <SearchContainer className='search-container' />
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
