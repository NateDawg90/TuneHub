import ReactDOM from 'react-dom';
import React from 'react';
import Root from './components/root';
import configureStore from './store/store';
import { login } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.login = login;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
