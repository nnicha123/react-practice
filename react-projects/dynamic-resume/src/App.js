import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';
import './style.css'
import HeaderSub from './HeaderSub';

class App extends Component {
  state = {
    mode: 'default',
    classMode: { header: 'header-wrapper', content: 'content' }
  }

  changeMode = (mode) => {
    switch (mode) {
      case 'sunset':
        this.setState({ classMode: { header: 'header-sunset', content: 'content-sunset' } })
        break;
      case 'blue':
        this.setState({classMode:{header: 'header-blue', content: 'content-blue'}})
        break;

      default:
        this.setState({ classMode: { header: 'header-wrapper', content: 'content' } })

        break;
    }
  }


  render() {
    return (
      <div className="App">
        <div class={this.state.classMode.header}>
          <HeaderSub />
        </div>
        <div className={this.state.classMode.content}>
          <ContentLeft />
          <ContentRight />
          {this.state.mode}
          <div className="DOMelements">
            <label>
              Pick your favorite theme:
                          <select value={this.state.mode} onChange={(e) => this.setState({ mode: e.target.value })}>
                <option value="default">Default</option>
                <option value="sunset">Sunset</option>
                <option value="blue">Blue Mode</option>
              </select>
              <button onClick={() => this.changeMode(this.state.mode)}>Change Mode</button>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
