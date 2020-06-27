import React , {Component} from 'react';
import Nav from './Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'
import ContactUs from './ContactUs'
import CheckOut from './CheckOut'
import Login from './Login';
import Favourites from './Favourites';

class App extends Component {
  state = {
    title:'This is the title from the app page'
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contactus" component={ContactUs}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/checkout" component={CheckOut}/>
            <Route 
            exact path="/favourites" render={() => (<Favourites title={this.state.title}/>)}/>
          </Switch>
        </div>
      </Router>
    );
  }
  
}

export default App;
