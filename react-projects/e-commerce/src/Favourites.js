import React, { Component } from 'react'
import './Favourites.css'
class Favourites extends Component {
    render() {
        return (
            <div className="favouritesOuterDiv">
                <div className="favourites">
                    <h3>FAVOURITES</h3>
                    {this.props.cake}
                </div>
            </div>
        )
    }
}

export default Favourites
