import React from 'react';
import './ListItems.css';

function ListItems(props) {
    const items = props.items;
    const listItems = items.map(el => {
        return <div className="list" key={el.key}>
            <span className="spanClass">
                <p>{el.text}</p>
                <button onClick={() => props.deleteItem(el.key)}>Remove</button>
            </span>
        </div>
    })
    return (
        <div>{listItems}</div>
    )
}
export default ListItems