import React, { Component } from 'react'

class Child extends Component {
    state={
        childUnit:'cm'
    }
    render() {
        return (
            <div>
                <h3>{this.props.data.unit}</h3>
                <button onClick={() => this.props.data.changeUnit(this.state.childUnit)}>Click</button>
            </div>
        )
    }
}

export default Child
