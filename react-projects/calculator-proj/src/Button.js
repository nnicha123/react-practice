import React, { Component } from 'react'

class Button extends Component {
    state = {
        value: 0
    }
    displayValue = () => {
        this.setState({value : this.props.children})
    }
    render() {
        return (
            <button onClick={this.displayValue} val={this.state.value}>
                {this.props.children}
            </button>
        )
    }
}

export default Button
