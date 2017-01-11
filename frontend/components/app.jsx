import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <header>
    <Link to="/" className="header-link">
      <h1>TuneHub</h1>
    </Link>
    <GreetingContainer />
    </header>

    { children }

  </div>
);

export default App;
