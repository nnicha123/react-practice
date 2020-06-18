import React, { Component } from 'react';
import './TestComp.css';

export class TestComp extends Component {
    state = {
        arr: [1, 20, 14, 2, 3, 5, 10],
        storeArr : [1,20,14,2,3,5,10],
        countIndex: 0
    }
    swap = () => {
        let newArr = [...this.state.arr];
        console.log(this.state.countIndex, newArr.length)
        if (this.state.countIndex > newArr.length -2) {
            this.setState({ countIndex:0 })
            console.log('In the loop', this.state.countIndex)
        }
        else {
            if (newArr[this.state.countIndex] > newArr[this.state.countIndex + 1]) {
                [newArr[this.state.countIndex], newArr[this.state.countIndex + 1]] = [newArr[this.state.countIndex + 1], newArr[this.state.countIndex]]
            }
            this.setState({ arr: newArr, countIndex: this.state.countIndex + 1 });
            console.log(this.state.countIndex)
        }
    }
    reset = () =>{
        let newArr = [...this.state.storeArr];
        this.setState({arr:newArr,countIndex:0});
    }
    render() {
        return (
            <div className="container">
                <ul className="listUl">
                    {this.state.arr.map((el, index) =>
                        <li key={index + 1}>
                            <div className="topElement" style={{ height: el * 10 }}></div>
                            <div>{el}</div>
                        </li>)}
                </ul>
                <button onClick={this.swap}>Swap</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default TestComp
