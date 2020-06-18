import React, { Component } from 'react';
import './App.css'
class Class1 extends React.Component {
    state = {
        dataNew: '',
        count: 0,
        removedCount: 0,
        color: true,
        textData: {
            text: '',
            key: ''
        },
        data: [],
        removedData: [],
        editData: {
            text: '',
            key: ''
        },
        edit: true
        // toggle:false
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
            data: [],
            count: 0,
            removedData: [],
            removedCount: 0
        })
    }
    toggleColor = () => {
        this.setState({ color: !this.state.color })
    }
    remove = (data) => {
        const newList = this.state.data.filter(el => el.key !== data.key)
        this.setState({ data: newList, count: this.state.count - 1, removedCount: this.state.removedCount + 1 });
        const newRemoved = [...this.state.removedData, data];
        this.setState({ removedData: newRemoved })
    }
    editElement = (element) => {
        const newData = [...this.state.data];
        const indextosplice = (newData.indexOf(element))
        if (this.state.editData.text.length) {
            newData.splice(indextosplice, 1);
            newData.splice(indextosplice, 0, this.state.editData);
            this.setState({ data: newData, editData: { text: '', key: '' } })
        }
    }
    reverse = (data) => {
        const newData = [...this.state.data, data]
        this.setState({ data: newData })
        const newRemovedList = this.state.removedData.filter(el => el.key !== data.key);
        this.setState({ removedData: newRemovedList, removedCount: this.state.removedCount - 1, count: this.state.count + 1 });
    }

    toggle = (index) => {
        let arr = [...this.state.data]
        arr = arr.map((obj, idx) => index === idx ? { ...obj, toggle: !arr[index].toggle } : obj)
        this.setState({ data: arr });

    }

    render() {
        let { name, age } = this.props;
        return (
            <div className="wrap">
                <div className="App Container">
                    <div className="divLeft">
                        {/* <div style={{ fontSize: "20px", color: "green" }}>Class component {this.props.name} {this.props.age}</div> */}
                        <h1 onClick={this.toggleColor} style={{ color: this.state.color ? "tomato" : 'blue' }}>Data Items</h1>
                        <p>{this.state.dataNew}</p>
                        {/* <button onClick={this.add}>+</button>
                    <button onClick={this.subtract}>-</button> */}
                        <button style={{ backgroundColor: this.state.color ? "tomato" : 'blue', color: this.state.color ? "black" : "white" }} onClick={this.reset}>Reset</button>
                        <h3 onClick={this.toggleColor} style={{ color: this.state.color ? "tomato" : 'blue' }}>{this.state.count}</h3>
                        <form onSubmit={this.submit}>
                            <input type="text" value={this.state.textData.text} onChange={(e) => { this.setState({ textData: { text: e.target.value, key: Date.now() } }) }} />
                            <ul className="listInput">
                                {this.state.data.map((element, index) => <li className="listStyle" key={element.key} ><span><input className="checked" type="checkbox" onClick={() => this.toggle(index)} /><span className="todoText" style={{ textDecoration: this.state.data[index].toggle ? "line-through" : "none" }}>{element.text}</span></span>
                                    <span className="rightSpan">
                                        <span><button style={{ backgroundColor: this.state.color ? "tomato" : 'blue', color: this.state.color ? "black" : "white" }} onClick={() => this.remove(element)}>Remove</button></span>
                                        <span><button style={{ backgroundColor: this.state.color ? "tomato" : 'blue', color: this.state.color ? "black" : "white" }} onClick={() => this.editElement(element)}>Edit</button></span>
                                        <span><input type="text" onChange={(e) => { this.setState({ editData: { text: e.target.value, key: Date.now() } }) }} /></span>
                                    </span>
                                </li>
                                )}
                            </ul>
                            <button type="submit" onSubmit={this.submit} style={{ backgroundColor: this.state.color ? "tomato" : "blue", color: this.state.color ? "black" : "white" }}>Submit</button>
                            {/* <button type="button" onClick={this.monitorCount}>Monitor Count</button> */}
                        </form>
                    </div>
                    <div className="divRight">
                        <h1 onClick={this.toggleColor} style={{ color: this.state.color ? "tomato" : 'blue' }}>Removed Items</h1>
                        <h3 onClick={this.toggleColor} style={{ color: this.state.color ? "tomato" : 'blue' }}>{this.state.removedCount}</h3>
                        <ul className="listInput">
                            {this.state.removedData.map(element => <li className="rightListStyle" key={element.key}><span>{element.text}</span><span><button onClick={this.toggleColor} style={{ backgroundColor: this.state.color ? "tomato" : 'blue', color: this.state.color ? "black" : "white" }} onClick={() => this.reverse(element)}>Reverse</button></span></li>)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Class1;