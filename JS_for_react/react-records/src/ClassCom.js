import React, { Component } from 'react';
import './App.css'
class Class1 extends React.Component {
    state = {
        dataNew: '',
        count: 0,
        removedCount:0,
        color: true,
        textData: {
            text: '',
            key: ''
        },
        data: [],
        removedData: []
    }
    submit = (e) => {
        e.preventDefault();
        const newItem = this.state.textData
        if (newItem.text.length > 0) {
            const move = [...this.state.data, newItem]
            this.setState({ data: move, textData: { text: "", key: "" }, count: this.state.count + 1 });
        }
    }
    add = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    subtract = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    reset = () => {
        this.setState({
            count: 0
        })
    }
    toggleColor = () => {
        this.setState({ color: !this.state.color })
    }
    remove = (data) => {
        const newList = this.state.data.filter(el => el.key !== data.key)
        this.setState({ data: newList, count: this.state.count - 1,removedCount:this.state.removedCount+1 });
        const newRemoved = [...this.state.removedData, data];
        this.setState({ removedData: newRemoved })
    }
    reverse = (data) => {
        const newData = [...this.state.data, data]
        this.setState({ data: newData })
        const newRemovedList = this.state.removedData.filter(el => el.key !== data.key);
        this.setState({ removedData: newRemovedList,removedCount:this.state.removedCount-1 });
    }

    render() {
        let { name, age } = this.props;
        return (
            <div className="Container">
                <div className="divLeft">
                    {/* <div style={{ fontSize: "20px", color: "green" }}>Class component {this.props.name} {this.props.age}</div> */}
                    <h1 onClick={this.toggleColor} style={{ color: this.state.color ? "tomato" : 'blue' }}>Click me</h1>
                    <p>{this.state.dataNew}</p>
                    <button onClick={this.add}>+</button>
                    <button onClick={this.subtract}>-</button>
                    <button onClick={this.reset}>Reset</button>
                    <h3 onClick={this.toggleColor} style={{ color: this.state.color ? "tomato" : 'blue' }}>{this.state.count}</h3>
                    <form onSubmit={this.submit}>
                        <input type="text" value={this.state.textData.text} onChange={e => { this.setState({ textData: { text: e.target.value, key: Date.now() } }) }} />
                        <ul>
                            {this.state.data.map(element => <li className="listStyle" key={element.key}><span>{element.text}</span><span><button onClick={this.toggleColor} style={{ backgroundColor: this.state.color ? "tomato" : 'blue' }} onClick={() => this.remove(element)}>Remove</button></span></li>)}
                        </ul>
                        <button type="submit" onSubmit={this.submit}>Submit</button>
                    </form>
                </div>
                <div className="divRight">
                    <h1 onClick={this.toggleColor} style={{ color: this.state.color ? "tomato" : 'blue' }}>Removed Items</h1>
                    <h3 onClick={this.toggleColor} style={{ color: this.state.color ? "tomato" : 'blue' }}>{this.state.removedCount}</h3>
                    <ul>
                        {this.state.removedData.map(element => <li className="listStyle" key={element.key}><span>{element.text}</span><span><button onClick={this.toggleColor} style={{ backgroundColor: this.state.color ? "tomato" : 'blue' }} onClick={() => this.reverse(element)}>Reverse</button></span></li>)}
                    </ul>
                </div>
            </div>
        )
    }
}
export default Class1;