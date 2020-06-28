import React, { Component } from 'react'

class Childtwo extends Component {
    render() {
        return (
            <div>
                <h3>Display in child 2: {this.props.data.unit}</h3>
                {this.props.cake.liked.map((el,index) => <div className="likedItems">
                    <div className="likedLeft">
                        <img src={el.image} />
                        <p>{el.title}</p>
                    </div>
                    <div className="likedRight">
                        <button onClick={() => this.removeLikes(index)}>Remove</button>
                    </div>
                </div>)}
            </div>
        )
    }
}

export default Childtwo
