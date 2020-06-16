
import React from 'react';
import './App.css';
import ListItems from './ListItems';

class App extends React.Component {
state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }
  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(item => item.key !== key)
    this.setState({
      items:filteredItems
    })
  }
  handleInput = (e) =>{
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
 
 render(){
  return (
    <div className="App">
      <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
          <button type="submit">Add</button>
        </form>
        <p>{this.state.items.text}</p>
                
      </header>
      <ListItems items={this.state.items}
      deleteItem ={this.deleteItem}/>
    </div>
  );
 }
}


export default App;