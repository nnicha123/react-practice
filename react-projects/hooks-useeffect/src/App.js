import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCounterOne from './ClassCounterOne';
import HookCounterOne from './HookCounterOne';
import ClassMouse from './ClassMouse';
import HookMouse from './HookMouse';
import MouseContainer from './MouseContainer';
import IntervalClassCounter from './IntervalClassCounter';
import IntervalHookCounter from './IntervalHookCounter';
function App() {
  return (
    <div className="App">
      {/* <ClassCounterOne/> */}
      {/* <HookCounterOne/> */}
      {/* <ClassMouse/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      <IntervalClassCounter/>
      <IntervalHookCounter/>
    </div>
  );
}

export default App;
