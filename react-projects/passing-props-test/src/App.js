import React, { Component } from 'react'
import Child from './Child'
import Childtwo from './Childtwo'
class App extends Component {
  state={
    unit:'kg'
  }
  changeUnit = (item) => {
    this.setState({unit:item})
  }
  render() {
    return (
      <div>
        <h1>Pass props from child to parent</h1>
        <Child data={{unit:this.state.unit,changeUnit:this.changeUnit}}/>
        <Childtwo data={{unit:this.state.unit}}/>
      </div>
    )
  }
}

export default App

