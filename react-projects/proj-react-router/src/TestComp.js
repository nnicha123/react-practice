import React, { Component } from 'react';
import './TestComp.css';

export class TestComp extends Component {
    state = {
        arr: [4, 3, 2, 10, 12, 1, 5, 6,7,12,9],
        storeArr: [4, 3, 2, 10, 12, 1, 5, 6,7,12,9],
        countIndex: 0,
        secondCountIndex: 1,
        newCount: 1
    }
    bubbleSort = () => {
        let newArr = [...this.state.arr];
        console.log(this.state.countIndex, newArr.length)

        if (this.state.countIndex > newArr.length - 2) {
            this.setState({ countIndex: 0 })
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
    insertionSort = () => {
        let newArr = [...this.state.arr]

        if (newArr[this.state.countIndex] > newArr[this.state.secondCountIndex]) {
            let temp = newArr[this.state.secondCountIndex]
            newArr.splice([this.state.secondCountIndex], 1)
            newArr.splice([this.state.countIndex], 0, temp)
            this.setState({ arr: newArr });
            console.log(this.state.countIndex, this.state.secondCountIndex)
        }
        this.setState({ secondCountIndex: this.state.secondCountIndex + 1 })
    }
    reset = () => {
        let newArr = [...this.state.storeArr];
        this.setState({ arr: newArr, countIndex: 0, secondCountIndex: 0 });
    }
    render() {
        return (
            <div className="container">
                <ul className="listUl">
                    {this.state.arr.map((el, index) =>
                        <li key={index + 1}>
                            <div className="topElement" style={{ height: el * 20 }}></div>
                            <div>{el}</div>
                        </li>)}
                </ul>
                <div className="buttonWrapper">
                    <button onClick={this.bubbleSort}>Bubble</button>
                    <button onClick={this.insertionSort}>Insertion</button>
                    <button onClick={this.reset}>Reset</button>
                </div>
            </div>
        )
    }
}

export default TestComp
