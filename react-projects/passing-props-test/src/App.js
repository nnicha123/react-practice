import React, { Component } from 'react'
import Child from './Child'
import Childtwo from './Childtwo'
import Nav from './Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'
class App extends Component {
  state={
    unit:'kg',
    liked:[]
  }
  changeUnit = (item) => {
    this.setState({unit:item})
  }
  changeLikes = (likes) => {
    this.setState({liked:likes})
  }
  render() {
    return (
      <Router>
        <Nav/>
      <div>
        <Switch>
          <Route exact path='/' render={() => (<Home data={{liked:this.state.liked,changeLikes:this.changeLikes}}/>)}/>
          <Route exact path='/childone' render={() => (<Child data={{unit:this.state.unit,changeUnit:this.changeUnit}}/>)}/>
          <Route exact path='/childtwo' render={() => (<Childtwo data={{unit:this.state.unit}} cake={{liked:this.state.liked}}/>)}/>
        </Switch>
      </div>
      </Router>
    )
  }
}

export default App

