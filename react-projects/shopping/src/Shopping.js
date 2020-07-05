import React, { Component } from 'react'
import Favourites from './Favourites'
import CheckOuts from './CheckOuts'
import './Nav.css'
import { Button } from 'antd'
import { ShoppingFilled, HeartFilled, UserOutlined } from '@ant-design/icons';
import './Cakes.css'
import cake1 from './cakes/blackwedding.PNG'
import cake2 from './cakes/cupcake.PNG'
import cake3 from './cakes/icecream.PNG'
import cake4 from './cakes/conecake.PNG'
import cake5 from './cakes/bluewedding.PNG'
import cake6 from './cakes/lightpinkcake.PNG'
import cake7 from './cakes/macaroons.PNG'
import cake8 from './cakes/orangecake.PNG'
import game1 from './games/game1.PNG'
import game2 from './games/game2.PNG'
import game3 from './games/game3.PNG'
import game4 from './games/game4.PNG'
import game5 from './games/game5.PNG'
import game6 from './games/game6.PNG'
import bag1 from './bags/black-red-tulip.jpg'
import bag2 from './bags/red-pink-tulip.jpg'
import bag3 from './bags/natural-yellow-tulip.jpg'
import bag4 from './bags/doctor-maroon.jpg'
import bag5 from './bags/doctor-navy.jpg'
import bag6 from './bags/doctor-black.jpg'
class Shopping extends Component {
    state = {
        cakes: [{ image: cake1, title: 'The black wedding cake', price: 30 },
        { image: cake2, title: 'The pink jolly cupcake', price: 10 },
        { image: cake3, title: 'The chocolate drip cake', price: 35 },
        { image: cake4, title: 'The icecream cone cake', price: 25 },
        { image: cake5, title: 'The blue wedding cake', price: 41 },
        { image: cake6, title: 'The pink tall cake', price: 21 },
        { image: cake7, title: 'Colorful Macaroons', price: 15 },
        { image: cake8, title: 'Orange fruit cake', price: 16 }],
        games: [{ image: game1, title: 'Adventurous Railway', price: 30 },
        { image: game2, title: 'Sammy Suafeas', price: 10 },
        { image: game3, title: 'Logical thinking game', price: 35 },
        { image: game4, title: 'Train disaster', price: 25 },
        { image: game5, title: 'Drop the balls', price: 41 },
        { image: game6, title: 'Exciting pinballs', price: 21 }],
        bags: [{ image: bag1, title: 'Black and Red Tulip', price: 30 },
        { image: bag2, title: 'Sweet Pink Tulip', price: 10 },
        { image: bag3, title: 'Natural Yellow Tulip', price: 35 },
        { image: bag4, title: "Doctor's Maroon", price: 25 },
        { image: bag5, title: "Doctor's Navy", price: 41 },
        { image: bag6, title: "Doctor's Black", price: 21 }],
        checkOut: [],
        favourite: [],
        components: [true, true, true],
        total: 0
    }

    updateCheckout = (ind) => {
        const newItem = this.state.cakes[ind]
        this.setState({ checkOut: [...this.state.checkOut, newItem] })
        this.setState({total:this.state.total + this.state.cakes[ind].price})
    }
    updateCheckoutGames = (ind) => {
        const newItem = this.state.games[ind]
        this.setState({ checkOut: [...this.state.checkOut, newItem] })
        this.setState({total:this.state.total + this.state.games[ind].price})
    }
    updateCheckoutBags = (ind) => {
        const newItem = this.state.bags[ind]
        this.setState({ checkOut: [...this.state.checkOut, newItem] })
        this.setState({total:this.state.total + this.state.bags[ind].price})
    }

    render() {
        return (
            <div>
                <nav>
                    <h3>Logo</h3>
                    <div className="nav-right">
                        <button onClick={() => this.setState({ components: [true, true, true] })}>All</button>
                        <button onClick={() => this.setState({ components: [true, false, false] })}>Cakes</button>
                        <button onClick={() => this.setState({ components: [false, true, false] })}>Games</button>
                        <button onClick={() => this.setState({ components: [false, false, true] })}>Bags</button>
                    </div>
                </nav>
                <div className="content">
                    <div className="content-left">
                        <h2>Shopping Items</h2>
                        {this.state.components[0] && <div className="outerDiv">
                            {this.state.cakes.map((el, index) => <div className="itemCard" key={index + 1}>
                                <div className="cardTop">
                                    <img src={el.image} />
                                    <div className="itemTitle">{el.title}</div>
                                </div>
                                <div className="cardBottom">
                                    <div>${el.price}</div>
                                    <div className="cardDivRight">
                                        <Button icon={<HeartFilled style={{ fontSize: '20px' }} />} style={{ color: 'maroon', background: 'white', border: 'none' }} ></Button>
                                        <Button icon={<ShoppingFilled style={{ fontSize: '20px' }} />} style={{ color: 'maroon', background: 'white', border: 'none' }} onClick={() => this.updateCheckout(index)}></Button>
                                    </div>
                                </div>
                            </div>)}
                        </div>}
                        {this.state.components[1] && <div className="outerDiv">
                            {this.state.games.map((el, index) => <div className="itemCard" key={index + 1}>
                                <div className="cardTop">
                                    <img src={el.image} />
                                    <div className="itemTitle">{el.title}</div>
                                </div>
                                <div className="cardBottom">
                                    <div>${el.price}</div>
                                    <div className="cardDivRight">
                                        <Button icon={<HeartFilled style={{ fontSize: '20px' }} />} style={{ color: 'maroon', background: 'white', border: 'none' }} ></Button>
                                        <Button icon={<ShoppingFilled style={{ fontSize: '20px' }} />} style={{ color: 'maroon', background: 'white', border: 'none' }} onClick={() => this.updateCheckoutGames(index)}></Button>
                                    </div>
                                </div>
                            </div>)}
                        </div>}
                        {this.state.components[2] && <div className="outerDiv">
                            {this.state.bags.map((el, index) => <div className="itemCard" key={index + 1}>
                                <div className="cardTop">
                                    <img src={el.image} />
                                    <div className="itemTitle">{el.title}</div>
                                </div>
                                <div className="cardBottom">
                                    <div>${el.price}</div>
                                    <div className="cardDivRight">
                                        <Button icon={<HeartFilled style={{ fontSize: '20px' }} />} style={{ color: 'maroon', background: 'white', border: 'none' }} ></Button>
                                        <Button icon={<ShoppingFilled style={{ fontSize: '20px' }} />} style={{ color: 'maroon', background: 'white', border: 'none' }} onClick={() => this.updateCheckoutBags(index)}></Button>
                                    </div>
                                </div>
                            </div>)}
                        </div>}
                    </div>
                    <CheckOuts items={this.state.checkOut} totalCheckout={this.state.total}/>
                </div>
            </div>
        )
    }
}

export default Shopping
