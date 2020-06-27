import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import CheckOut from './CheckOut'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/aboutus" component={AboutUs}/>
          <Route exact path="/contactus" component={ContactUs}/>
          <Route exact path="/checkout" component={CheckOut}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
