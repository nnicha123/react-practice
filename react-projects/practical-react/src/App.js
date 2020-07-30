import React from 'react';
import './App.css';
import ReactIcons from './ReactIcons'
import ToastNotifications from './ToastNotifications';
import ModalTest from './ModalTest';
import TippyTest from './TippyTest';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import CountupTest from './CountupTest';
import IdleTimerTest from './IdleTimerTest';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/react-icons' component={ReactIcons} />
          <Route path='/react-toast' component={ToastNotifications} />
          <Route path='/react-tippy' component={TippyTest} />
          <Route path='/react-modal' component={ModalTest} />
          <Route path='/react-countup' component={CountupTest} />
          <Route path='/idle-timer' component={IdleTimerTest} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
