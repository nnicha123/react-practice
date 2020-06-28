import React, { Component } from 'react'
import Child from './Child'
import Childtwo from './Childtwo'
import Nav from './Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'
class App extends Component {
  state={
    unit:'kg'
  }
  changeUnit = (item) => {
    this.setState({unit:item})
  }
  render() {
    return (
      <Router>
        <Nav/>
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/childone' render={() => (<Child data={{unit:this.state.unit,changeUnit:this.changeUnit}}/>)}/>
          <Route exact path='/childtwo' render={() => (<Childtwo data={{unit:this.state.unit}}/>)}/>
        </Switch>
      </div>
      </Router>
    )
  }
}

export default App

