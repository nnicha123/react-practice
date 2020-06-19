import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentC from './ComponentC';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
// App -> C -> E -> F (want to pass props from App to E or F) pass to E using useContext (hook) and to F using the method before having hooks
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Nicha'}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
