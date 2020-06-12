import React, {useState,useEffect} from 'react';
import './App.css';

function Shop() {
    useEffect(() => {
        fetchItems();
    },[]);

    const [items,setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/items/popular');
        const items = await data.json();
        console.log(items);
        setItems(items);
    }
  return (
    <div>
      <h1>Shop page</h1>
    </div>
  );
}

export default Shop;
