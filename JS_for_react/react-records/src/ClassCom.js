import React, { Component } from 'react';

class Class1 extends React.Component {
    state = {
        dataNew: '',
        count: 0,
        color: true,
        text: '',
        data: []
    }
    submit = (e) => {
        e.preventDefault();
        let move = [...this.state.data, this.state.text]
        this.setState({ data: move,text:'' });
        document.querySelector('input').value = '';
    }
    render() {
        let { name, age } = this.props;
        return (
            <div>
                {/* <div style={{ fontSize: "20px", color: "green" }}>Class component {this.props.name} {this.props.age}</div> */}
                <h1 onClick={() => this.setState({ color: !this.state.color })} style={{ color: this.state.color ? "tomato" : 'blue' }}>Click me</h1>
                <p>{this.state.dataNew}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
                <button onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
                <button onClick={() => this.setState({ count: 0 })}>Reset</button>
                <h3 onClick={() => this.setState({ color: !this.state.color })} style={{ color: this.state.color ? "tomato" : 'blue' }}>{this.state.count}</h3>
                <p>{this.newcount}</p>
                <form onSubmit={this.submit}>
                    <input type="text" onChange={e => { this.setState({ text: e.target.value }) }} />
                    <ul>
                        {this.state.data.map(element => <li>{element}</li>)}
                    </ul>
                    <button type="submit" onSubmit={this.submit}>Submit</button>
                </form>
            </div>
        )
    }
}
export default Class1;