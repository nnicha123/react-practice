import React from 'react';
import logo from './logo.svg';
import './App.css';
import App1 from './App1';
import Class1 from './ClassCom';

function App() {
  return (
    <div className="App">
    {/* <App1 data="Data" send="I am send" name="I am name"/> */}
    <Class1 name="Nicha" age="24"/>
    </div>

  );
}

export default App;
