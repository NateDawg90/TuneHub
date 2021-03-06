import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import TrackPlayerContainer from './track_player/track_player_container';
import { Link } from 'react-router';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div className="root">
    <header>
      <link
        href="https://fonts.googleapis.com/css?family=Bungee+Shade"
        rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css?family=Rubik"
        rel="stylesheet" />
    </header>
    <GreetingContainer className='greeting'/>

    { children }

    <TrackPlayerContainer />
  </div>
);

export default App;
