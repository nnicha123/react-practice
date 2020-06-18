import React, { Component } from 'react';
import './TestComp.css';

export class TestComp extends Component {
    state = {
        arr: [1, 20, 14, 2, 3, 5, 10],
        countIndex:0
    }
    swap = () => {
       let newArr = [1,14,20,2,3,5,10];
       console.log(this.state.arr,newArr)
       this.setState({arr:newArr,countIndex:this.state.countIndex+1});
       console.log(this.state.countIndex)
    }
    render() {
        return (
            <div className="container">
                <ul className="listUl">
                    {this.state.arr.map((el,index) =>
                        <li key={index+1}>
                            <div className="topElement" style={{ height: el * 10 }}></div>
                            <div>{el}</div>
                        </li>)}
                </ul>
                <button onClick={this.swap}>Swap</button>
            </div>
        )
    }
}

export default TestComp
