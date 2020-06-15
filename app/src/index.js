import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Hello from './App';
import * as serviceWorker from './serviceWorker';
import New from './newComponent';
import User from './user';
// console.log(Hello.App())
ReactDOM.render(
  <React.StrictMode>
    <Hello.App/>
    <Hello.Component/>
    <New/>
    <User/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
