import React from 'react';
// import './App.css';
import Class1 from './ClassCom';
import Nav from './Nav';
import Home from './Home';
import Counter from './Counter';
import TestComp from './TestComp';
import Calculator from './Calculator';
import Weather from './Weather';
import Cards from './Cards';
import Quote from './Quote';
import TimerClass from './TimerClass';
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
          <Route path="/quotes" component={Quote}/>
          <Route path="/timer" component={TimerClass}/>
          <Route path="/todo" component={Class1} />
          <Route path="/counter" component={Counter} />
          <Route path="/calculator" component={Calculator}/>
          <Route path="/weather" component={Weather}/>
          <Route path="/cards" component={Cards}/>
          <Route path="/sort" component={TestComp}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
