import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import SearchContainer from '../search/search_container';

class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    debugger;
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
    // debugger;
    return (
      <div className='header'>
        <div className="left-nav">
          <Link to="/" className="header-link">
            <div className='splash-logo'></div>
            <h1 className='tunehub'>TuneHub</h1>
          </Link>
          <span className='slogan'>Connecting people with tunes and their creators
          </span>
        </div>
        {this.props.currentUser ? this.personalGreeting(this.props.currentUser, this.props.logout) : this.sessionLinks()}

      </div>
    );
  }
}



// const sessionLinks = () => (
//   <div className='header'>
//     <div className="left-nav">
//       <Link to="/" className="header-link">
//         <div className='splash-logo'></div>
//         <h1 className='tunehub'>TuneHub</h1>
//       </Link>
//       <span className='slogan'>Connecting people with tunes and their creators
//       </span>
//     </div>
//     <nav className="login-signup">
//       <Link className='login-button' to="/login" activeClassName="current">Login</Link>
//       <div className='or'>or</div>
//       <Link className='login-button' to="/signup" activeClassName="current">Sign up!</Link>
//   </nav>
//
//   </div>
// );
// // <button
// //   type="button"
// //   onClick={this.handleDemo}
// //   className="demo-login">
// //   Demo
// // </button>
//
// const personalGreeting = (currentUser, logout) => (
//   <div className='header'>
//     <div className="left-nav">
//       <Link to="/" className="header-link">
//         <div className='splash-logo'></div>
//         <h1 className='tunehub'>TuneHub</h1>
//       </Link>
//       <span className='slogan'>Connecting people with tunes and their creators
//       </span>
//     </div>
//     <hgroup className="header-group">
//
//       <h2 className="hi">Hi, </h2>
//       <Link to={`/fans/${currentUser.id}`} className='profile-link'>
//         <div className='username'>{currentUser.username}</div>
//       </Link>
//       <button className="logout-button" onClick={logout}>Log Out</button>
//     </hgroup>
//
//   </div>
// );
//
// const Greeting = ({ currentUser, logout }) => (
//   currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
// );

export default withRouter(Greeting);
