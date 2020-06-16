import React from 'react';
import './ListItems.css';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(el => {
        return <div className="list" key="el.key">
            <span class="spanClass"><p>{el.text}</p><button>Remove</button></span>
        </div>
    })
    return(
    <div>{listItems}</div>
    )
}
export default ListItems