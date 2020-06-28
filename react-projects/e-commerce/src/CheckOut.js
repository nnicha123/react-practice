import React, { Component } from 'react'
import './CheckOut.css'

class CheckOut extends Component {
    render() {
        return (
            <div className="favouritesOuterDiv">
                <div className="favourites">
                    <h3>CHECKOUT</h3>
                    {this.props.checkOut.checkout.map((el,index) => <div className="arrangeLikes">
                        <div className="favouriteStart">
                            <img src={el.image} alt="cake" />
                            <div>{el.title}</div>
                        </div>
                        <div className="favouriteEnd" onClick={() => this.removeLike(index)}>
                            <div>Remove</div>
                        </div>
                    </div>)}
                </div>
            </div>
        )
    }
}

export default CheckOut
