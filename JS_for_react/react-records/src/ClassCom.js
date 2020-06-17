import React, { Component } from 'react';
import './App.css'
class Class1 extends React.Component {
    state = {
        dataNew: '',
        count: 0,
        color: true,
        textData:{
            text: '',
            key:''
        },
        data: []
    }
    submit = (e) => {
        e.preventDefault();
        const newItem = this.state.textData
        if(newItem.text.length > 0){
            const move = [...this.state.data, newItem]
            this.setState({ data: move,textData:{text:"",key:""}});
        }
    }
    add = () =>{
        this.setState({
            count:this.state.count+1
        })
    }
    subtract = () => {
        this.setState({
            count:this.state.count-1
        })
    }
    reset = () => {
        this.setState({
            count:0
        })
    }
    toggleColor = () => {
        this.setState({ color: !this.state.color })
    }
    remove = (key) => {
        const newList = this.state.data.filter(el => el.key !== key)
        this.setState({data:newList});
    }

    render() {
        let { name, age } = this.props;
        return (
            <div>
                {/* <div style={{ fontSize: "20px", color: "green" }}>Class component {this.props.name} {this.props.age}</div> */}
                <h1 onClick={this.toggleColor} style={{ color: this.state.color ? "tomato" : 'blue' }}>Click me</h1>
                <p>{this.state.dataNew}</p>
                <button onClick={this.add}>+</button>
                <button onClick={this.subtract}>-</button>
                <button onClick={this.reset}>Reset</button>
                <h3 onClick={this.toggleColor} style={{ color: this.state.color ? "tomato" : 'blue' }}>{this.state.count}</h3>
                <p>{this.newcount}</p>
                <form onSubmit={this.submit}>
                    <input type="text" value={this.state.textData.text} onChange={e => { this.setState({ textData:{text: e.target.value, key:Date.now()} }) }} />
                    <ul>
                        {this.state.data.map(element => <li className="listStyle" key={element.key}><span>{element.text}</span><span><button onClick={() => this.remove(element.key)}>Remove</button></span></li>)}
                    </ul>
                    <button type="submit" onSubmit={this.submit}>Submit</button>
                </form>
            </div>
        )
    }
}
export default Class1;