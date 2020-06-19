import React,{useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import DataFetchingOne from './DataFetchingOne';
import DataFetchingTwo from './DataFetchingTwo';

function App() {
  return (
    <div className="App">
      {/* <DataFetchingOne/> */}
      <DataFetchingTwo/>
    </div>
  );
}

export default App;
