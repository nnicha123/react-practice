import React, { useState } from 'react'
import './Cards.css'

function Cardsobj() {
    const [display, setDisplay] = useState(true)
    const [newItem, setNewItem] = useState({userId:'',firstName:'',lastName:'',imageSrc:'',emailAddress:''})
    const [card, setCard] = useState([
        {
            userId: 1,
            firstName: "Krish",
            lastName: "Lee",
            imageSrc: "https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg",
            emailAddress: "krish.lee@learningcontainer.com"
        },
        {
            userId: 2,
            firstName: "racks",
            lastName: "jacson",
            imageSrc: "https://images.newscientist.com/wp-content/uploads/2019/07/02111520/gettyimages-157639696.jpg",
            emailAddress: "racks.jacson@learningcontainer.com"
        },
        {
            userId: 3,
            firstName: "denial",
            lastName: "roast",
            imageSrc: "https://cdn.britannica.com/38/111338-050-D23BE7C8/Stars-NGC-290-Hubble-Space-Telescope.jpg",
            emailAddress: "denial.roast@learningcontainer.com"
        }])

    let submit = (e) => {
        e.preventDefault();
        setCard([ ...card, newItem ])
    }

    let cardItems = card.map(item => (<div className="card-wrap" key={item.userId}>
        <img src={item.imageSrc} />
        <p className="fullname">Full name : {item.firstName} {item.lastName}</p>
        <p className="content">{item.emailAddress}</p>
    </div>))
    return (
        <div>
            <form onSubmit={submit} className="form-style">
                <h2>Enter information to add items</h2>
                <input type="text" value={newItem.firstName} onChange={e => setNewItem({ ...newItem, firstName: e.target.value })} placeholder="Enter first name" />
                <input type="text" value={newItem.lastName} onChange={e => setNewItem({ ...newItem, lastName: e.target.value })} placeholder="Enter last name" />
                <input type="text" value={newItem.imageSrc} onChange={e => setNewItem({ ...newItem, imageSrc: e.target.value })} placeholder="Enter image src" />
                <input type="text" value={newItem.emailAddress} onChange={e => setNewItem({ ...newItem, emailAddress: e.target.value })} placeholder="Enter email" />
                <button type="submit" onSubmit={submit}>Add Item</button>
            </form>
            {display &&
                <div className="outer-container">
                    <div className="card-items">
                        {cardItems}
                    </div>
                </div>}
        </div>
    )
}

export default Cardsobj
