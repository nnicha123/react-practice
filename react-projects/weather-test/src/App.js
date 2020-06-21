import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Weather from './Weather';
import Current from './Current';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        {/* <App1 data="Data" send="I am send" name="I am name"/> */}
        {/* <Class1 name="Nicha" age="24"/> */}
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/daily" component={Weather} />
          <Route path="/current" component={Current} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
