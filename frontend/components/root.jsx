import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import ArtistIndexContainer from './artists/artist_index_container';
import ArtistDetailContainer from './artist_page/artist_detail_container';
import FanDetailContainer from './fan_page/fan_detail_container';
import ArtistActions from '../actions/artist_actions';
import * as SessionActions from '../actions/session_actions';


const Root = ({ store }) => {


  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };



  const _requestUserInfo = () => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      SessionActions.requestUser(currentUser.id);
    }
  };



  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={App} className='app'>
          <IndexRoute component={ArtistIndexContainer} />
          <Route path="login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="artists/:artistId" component={ArtistDetailContainer} onEnter={_ensureLoggedIn}/>
          <Route path="fans/:userId" component={FanDetailContainer}  onEnter={_requestUserInfo}/>

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
