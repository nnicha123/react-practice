import React from 'react';
import './App.css';
import FocusInput from './FocusInput';
import ClassTimer from './ClassTimer';
import HookTimer from './HookTimer';

function App() {
  return (
    <div className="App">
      <ClassTimer/>
      <HookTimer/>
      <FocusInput/>
    </div>
  );
}

export default App;
