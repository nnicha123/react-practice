import React, { Component } from 'react'
import { Button } from 'antd'
import { ShoppingFilled, HeartFilled, UserOutlined } from '@ant-design/icons';
import './Games.css'
import game1 from './games/game1.PNG'
import game2 from './games/game2.PNG'
import game3 from './games/game3.PNG'
import game4 from './games/game4.PNG'
import game5 from './games/game5.PNG'
import game6 from './games/game6.PNG'
class Games extends Component {
    state = {
        games: [{ image: game1, title: 'Adventurous Railway', price: 30 },
        { image: game2, title: 'Sammy Suafeas', price: 10 },
        { image: game3, title: 'Logical thinking game', price: 35 },
        { image: game4, title: 'Train disaster', price: 25 },
        { image: game5, title: 'Drop the balls', price: 41 },
        { image: game6, title: 'Exciting pinballs', price: 21 }],
        checkOut: [{image: game2, title: 'Sammy Suafeas', price: 10}]
    }
    render() {
        return (
            <div className="outerDiv">
                {this.state.games.map(el => <div className="itemCard">
                    <div className="cardTop">
                        <img src={el.image} />
                        <div className="itemTitle">{el.title}</div>
                    </div>
                    <div className="cardBottom">
                        <div>${el.price}</div>
                        <div className="cardDivRight">
                            <Button icon={<HeartFilled style={{ fontSize: '20px' }} />} style={{ color: 'maroon', background: 'white', border: 'none' }}></Button>
                            <Button icon={<ShoppingFilled style={{ fontSize: '20px' }} />} style={{ color: 'maroon', background: 'white', border: 'none' }}></Button>
                        </div>
                    </div>
                </div>)}
            </div>
        )
    }
}

export default Games
