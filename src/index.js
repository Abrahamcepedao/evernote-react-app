import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = requere('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyBFYQmM0gdS-AOYz8eB7_41PKv6y0nRk4I",
  authDomain: "evernote-react-clone-76dc9.firebaseapp.com",
  databaseURL: "https://evernote-react-clone-76dc9.firebaseio.com",
  projectId: "evernote-react-clone-76dc9",
  storageBucket: "evernote-react-clone-76dc9.appspot.com",
  messagingSenderId: "94098866594",
  appId: "1:94098866594:web:9e13622111cb23895e72fb"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
