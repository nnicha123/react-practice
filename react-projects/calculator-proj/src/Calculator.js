import React, { Component, Children } from 'react'
import './Calculator.css'
import Button from './Button'

class Calculator extends Component {
    state = {
        count:0,
        result:0
    }
    displayNumber = (props) => {
        this.setState({result:props.val})
        console.log(props.val)
    }
    render() {
        return (
            <div className="container">
                <input type="number" value={this.state.result}/>
                <Button className="clear">clear</Button>
                <Button className="operator" onClick={this.displayNumber} value={this.props.val}>÷</Button>
                <Button onClick={this.displayNumber} value={this.props.val}>7</Button>
                <Button onClick={this.displayNumber} value={this.props.val}>8</Button>
                <Button onClick={this.displayNumber} value={this.props.val}>9</Button>
                <Button className="operator" onClick={this.displayNumber} value={this.props.val}>-</Button>
                <Button onClick={this.displayNumber} value={this.props.val}>4</Button>
                <Button onClick={this.displayNumber} value={this.props.val}>5</Button>
                <Button onClick={this.displayNumber} value={this.props.val}>6</Button>
                <Button className="operator" onClick={this.displayNumber}>+</Button>
                <Button onClick={this.displayNumber} value={this.props.val}>1</Button>
                <Button onClick={this.displayNumber} value={this.props.val}>2</Button>
                <Button onClick={this.displayNumber} value={this.props.val}>3</Button>
                <Button className="operator" onClick={this.displayNumber} value={this.props.val}>=</Button>
            </div>
        )
    }
}

export default Calculator
