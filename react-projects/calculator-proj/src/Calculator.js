import React, { Component } from 'react'
import './Calculator.css'
class Calculator extends Component {
    state = {
        result: 0
    }
    handleClick = (val) => {
        if (val == 'clear') {
            this.setState({ result: 0 })
        } else if (val === '=') {
            console.log(this.state.result)
            // console.log(this.state.result.includes('+'))
            if (this.state.result.includes('+')) {
                let operator = this.state.result.indexOf('+')
                let firstNum = this.state.result.substr(0, operator);
                let secondNum = this.state.result.substr(operator + 1, this.state.result.length)
                this.setState({result:Number(firstNum) + Number(secondNum)})
            }
            else if (this.state.result.includes('-')) {
                let operator = this.state.result.indexOf('-')
                let firstNum = this.state.result.substr(0, operator);
                let secondNum = this.state.result.substr(operator + 1, this.state.result.length)
                this.setState({result:Number(firstNum) - Number(secondNum)})
            }
            else if  (this.state.result.includes('÷')) {
                let operator = this.state.result.indexOf('÷')
                let firstNum = this.state.result.substr(0, operator);
                let secondNum = this.state.result.substr(operator + 1, this.state.result.length)
                this.setState({result:Number(firstNum) / Number(secondNum)})
            }

        }
        else {
            this.setState({
                result: this.state.result + val
            })
        }

    }
    render() {
        return (
            <div className="container">
                <input value={this.state.result} />
                {/* <button onClick={this.handleClick}>3</button> */}
                <button className="clear" onClick={() => this.handleClick('clear')}>clear</button>
                <button className="operator" onClick={() => this.handleClick('÷')}>÷</button>

                <button onClick={() => this.handleClick('7')}>7</button>
                <button onClick={() => this.handleClick('8')}>8</button>
                <button onClick={() => this.handleClick('9')}>9</button>
                <button className="operator" onClick={() => this.handleClick('-')}>-</button>
                <button onClick={() => this.handleClick('4')}>4</button>
                <button onClick={() => this.handleClick('5')}>5</button>
                <button onClick={() => this.handleClick('6')}>6</button>
                <button className="operator" onClick={() => this.handleClick('+')}>+</button>
                <button onClick={() => this.handleClick('1')}>1</button>
                <button onClick={() => this.handleClick('2')}>2</button>
                <button onClick={() => this.handleClick('3')}>3</button>
                <button className="operator" onClick={() => this.handleClick('=')}>=</button>
            </div>
        )
    }
}

export default Calculator
