import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCounter from './ClassCounter';
import HookCounter from './HookCounter';
import HookCounterTwo from './HookCounterTwo';
import HookCounterThree from './HookCounterThree';
import HookCounterFour from './HookCounterFour';

function App() {
  return (
    <div className="App">
      <ClassCounter/>
      <HookCounter/>
      <HookCounterTwo/>
      <HookCounterThree/>
      <HookCounterFour/>
    </div>
  );
}

export default App;
