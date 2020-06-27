import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'
import ContactUs from './ContactUs'
import CheckOut from './CheckOut'
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contactus" component={ContactUs}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/checkout" component={CheckOut}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
