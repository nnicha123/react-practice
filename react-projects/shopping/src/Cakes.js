import React from 'react'

function Cakes(props) {
    return (
        <div>
            {props.cakes.map(el => <div className="itemCard">
                <img src={el.image} />
                <div className="itemTitle">{el.title}</div>
                <div className="cardBottom">
                    <div>${el.price}</div>
                </div>
            </div>)}
        </div>
    )
}

export default Cakes
