import React from 'react';
import './App.css';
import RegisterForm from './Container/RegisterForm/RegisterForm';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RegisterForm/>
      </div>
      )
  };
}

export default App;
