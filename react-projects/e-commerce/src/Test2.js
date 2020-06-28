import React, { Component } from 'react'

class Test2 extends Component {
    state = {
        liked: []
    }

    render() {
        return (
            <div>
                {this.props.cake}
                <button onClick={() => this.props.changeCake(this.state.newCake)}>Click</button>
            </div>
        )
    }
}

export default Test2
