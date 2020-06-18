import React, { Component } from 'react'
import './Counter.css'

export default class Counter extends Component {
    state = {
        count_one: 0,
        count_two: 0,
        modOne: true,
        operator: '+',
        result:0
    }
    add = () => this.state.modOne ? this.setState({ count_one: this.state.count_one + 1 }) : this.setState({ count_two: this.state.count_two + 1 })
    reset = () => this.state.modOne ? this.setState({ count_one: 0 }) : this.setState({ count_two: 0 })
    subtract = () => this.state.modOne ? this.setState({ count_one: this.state.count_one - 1 }) : this.setState({ count_two: this.state.count_two - 1 })
    compute = () => {
        let operatorValue = this.state.operator;
        let resultValue
        switch (operatorValue){
            case '+': resultValue = (this.state.count_one + this.state.count_two);break;
            case '-': resultValue = (this.state.count_one - this.state.count_two);break;
            case 'x': resultValue = (this.state.count_one * this.state.count_two);break;
            case '/': resultValue = (this.state.count_one / this.state.count_two);break;
        }
        this.setState({result:resultValue})
    }
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="wrapper">
                    <div className="Counter">
                        <button className="chooseValue" onClick={() => this.setState({ modOne: true })}>Value 1</button>
                        <span><button onClick={this.reset}>Reset</button><button onClick={this.add}>+</button><button onClick={this.subtract}>-</button></span>
                        <div className="counterValue">{this.state.count_one}</div>
                    </div>
                    <div className="Counter">
                        <button className="chooseValue" onClick={() => this.setState({ modOne: false })}>Value 2</button>
                        <span><button onClick={this.reset}>Reset</button><button onClick={this.add}>+</button><button onClick={this.subtract}>-</button></span>
                        <div className="counterValue">{this.state.count_two}</div>
                    </div>
                </div>
                <div>
                <p style={{ textAlign: "center", fontSize: 24 }}>Your choice is now : {!this.state.modOne && <span style={{ color: 'tomato', fontWeight: 'bolder' }}>Value 2</span>} {this.state.modOne && <span style={{ color: 'tomato', fontWeight: 'bolder' }}>Value 1</span>}</p>
                    <p>Select Operator to perform
                        <button onClick={() => this.setState({operator:'+'})}>+</button>
                        <button onClick={() => this.setState({operator:'-'})}>-</button>
                        <button onClick={() => this.setState({operator:'x'})}>x</button>
                        <button onClick={() => this.setState({operator:'/'})}>/</button>
                        {(this.state.operator==='-') && <span style={{ color: 'tomato', fontWeight: 'bolder' }}>Subtract</span>} {(this.state.operator==='+') && <span style={{ color: 'tomato', fontWeight: 'bolder' }}>Add</span>}
                        {(this.state.operator==='x') && <span style={{ color: 'tomato', fontWeight: 'bolder' }}>Multiply</span>} {(this.state.operator==='/') && <span style={{ color: 'tomato', fontWeight: 'bolder' }}>Divide</span>}
                    </p>
                    <p style={{textAlign:'center'}}>Press <button onClick={this.compute}>=</button> to complete</p>
                    <span style={{ display: 'flex',marginBottom:'20px' }}>
                        <div style={{ margin: '10px', width: 'max-content' }} className="counterValue">{this.state.count_one}</div>
                        <div style={{ margin: '10px', width: 'max-content',backgroundColor:"tomato",color:'white' }} className="counterValue">{this.state.operator}</div>
                        <div style={{ margin: '10px', width: 'max-content' }} className="counterValue">{this.state.count_two}</div>
                        <button onClick={this.compute} style={{ margin: '10px', width: 'max-content',backgroundColor:"tomato",color:'white' }} className="counterValue">=</button>
                        <div style={{ margin: '10px', width: 'max-content' }} className="counterValue">{this.state.result}</div>
                    </span>
                </div>
            </div>
        )
    }
}
