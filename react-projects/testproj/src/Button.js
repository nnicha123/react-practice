import React, { Component } from 'react'

export class Button extends Component {
    state = {
        result: 0
    }
    setResult = (children) => {
        console.log(children)
        this.setState({result:children},() => console.log(this.state.result))
    }
    render() {

        return (
            <div>
                <div>
                    <button onClick={() => this.setResult(this.props.children)} result={this.state.result}>{this.props.children}</button>
                </div>
            </div>
        )
    }
}

export default Button

