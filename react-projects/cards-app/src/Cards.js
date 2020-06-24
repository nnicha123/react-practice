import React, { useState } from 'react'
import './Cards.css'

function Cards() {
    const [card, setCard] = useState([
        {
          "userId": 1,
          "firstName": "Krish",
          "lastName": "Lee",
          "phoneNumber": "123456",
          "emailAddress": "krish.lee@learningcontainer.com"
        },
        {
          "userId": 2,
          "firstName": "racks",
          "lastName": "jacson",
          "phoneNumber": "123456",
          "emailAddress": "racks.jacson@learningcontainer.com"
        },
        {
          "userId": 3,
          "firstName": "denial",
          "lastName": "roast",
          "phoneNumber": "33333333",
          "emailAddress": "denial.roast@learningcontainer.com"
        }])

    let submit = (e) => {
        e.preventDefault();
        setCard({ ...card, display: true })
    }
    return (
        <div>
            <form onSubmit={submit} className="form-style">
                <input type="text" value={card.firstName} onChange={e => setCard({ ...card, firstName: e.target.value })} placeholder="Enter first name" />
                <input type="text" value={card.lastName} onChange={e => setCard({ ...card, lastName: e.target.value })} placeholder="Enter last name" />
                <input type="text" value={card.imageSrc} onChange={e => setCard({ ...card, imageSrc: e.target.value })} placeholder="Enter image src" />
                <textarea type="text" value={card.content} onChange={e => setCard({ ...card, content: e.target.value })} placeholder="Your content" />

                <button type="submit" onSubmit={submit}>Submit</button>
            </form>
            {card.display &&
                <div className="outer-container">
                    <div className="card-wrap">
                        <img src={card.imageSrc} />
                        <p className="fullname">Full name : {card.firstName} {card.lastName}</p>
                        <p className="content">{card.content}</p>
                    </div>
                </div>}
        </div>
    )
}

export default Cards
