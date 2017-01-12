import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link } from 'react-router';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div className="root">
    <header className="header">
      <link href="https://fonts.googleapis.com/css?family=Bungee+Shade" rel="stylesheet" />
      <div className="left-nav">
        <div className='splash-logo'></div>
        <Link to="/" className="header-link">
          <h1>TuneHub</h1>
        </Link>

      </div>
      <GreetingContainer />
    </header>

    { children }
    <Footer />
  </div>
);

export default App;
