import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link } from 'react-router';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div className="root">
    <header className='header'>
      <link href="https://fonts.googleapis.com/css?family=Bungee+Shade" rel="stylesheet" />

      <GreetingContainer/>
    </header>

    { children }
    <Footer />
  </div>
);

export default App;
