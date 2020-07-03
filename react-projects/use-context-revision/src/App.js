import React, { Component } from 'react'
import C from './C'

export const UserContext = React.createContext()

export class App extends Component {
  state = {
    name:'Nicha',
    age:24,
    email:'nicha_nga@hotmail.com'
  }
  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <C/>
        </UserContext.Provider>
      </div>
    )
  }
}

export default App
