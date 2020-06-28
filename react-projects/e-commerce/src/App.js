import React, { Component } from 'react';
import Nav from './Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'
import ContactUs from './ContactUs'
import CheckOut from './CheckOut'
import Login from './Login';
import Favourites from './Favourites';
import Test from './Test';
import Test2 from './Test2'
import cake2 from './cakes/cupcake.PNG'
import cake3 from './cakes/icecream.PNG'
import cake4 from './cakes/conecake.PNG'
class App extends Component {
  state = {
    title: 'This is the title from the app page',
    message: 'Hello',
    unit: 'kg',
    liked: [{ image: cake2,title: 'The pink jolly cupcake',paragraph: 'The most delicate pink cupcake ever made!'},
    { image: cake3,title: 'The chocolate drip cake',paragraph: 'Topped with sour raspberries and 3 icecream layers'},
    { image: cake4,title: 'The icecream cone cake',paragraph: 'Sprinkled with joy and dripping with delicious jam'},]
  }
  changeUnit = (item) => this.setState({ unit: item })
  changeCake = (cake) => this.setState({ liked: cake })
  returnData = (liked) => {
    return (liked.map((el, index) => <div className="arrangeLikes">
      <div className="favouriteStart">
        <img src={el.image} alt="cake" style={{height:'60px',width:'60px'}}/>
        <div>{el.title}</div>
      </div>
      <div className="favouriteEnd" onClick={() => this.removeLike(index)}>
        <div>Remove</div>
      </div>
    </div>))
  }
  render() {
    return (
      // <div>
      //   <Router>
      //     <Switch>
      //       <Route path='/test' render={() =><Test data={{ unit: this.state.unit, changeUnit: this.changeUnit }} cake={this.returnData(this.state.liked)} changeCake={this.changeCake}/>}/>
      //       <Route path='/second' render={() => <Test2 changeCake={this.changeCake} cake={this.returnData(this.state.liked)}/>}/>
      //     </Switch>
      //   </Router>
      // </div>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" render={() => (<Home cake={this.returnData(this.state.liked)} changeCake={this.changeCake} />)} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/checkout" component={CheckOut} />
            <Route
              exact path="/favourites" render={() => (<Favourites changeCake={this.changeCake} cake={this.returnData(this.state.liked)}/>)}/>
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;
