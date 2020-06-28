import React, { Component } from 'react'

class Childtwo extends Component {
    render() {
        return (
            <div>
                <h3>Display in child 2: {this.props.data.unit}</h3>
            </div>
        )
    }
}

export default Childtwo
