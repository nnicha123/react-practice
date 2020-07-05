import React, { Component } from 'react'
import Favourites from './Favourites'
import CheckOuts from './CheckOuts'
import './Nav.css'
import { Button } from 'antd'
import { ShoppingFilled, HeartFilled, DeleteFilled } from '@ant-design/icons';
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
        cakes: [{ image: cake1, title: 'The black wedding cake', price: 30, quantity: 1, totalPrice: 0 },
        { image: cake2, title: 'The pink jolly cupcake', price: 10, quantity: 1, totalPrice: 0 },
        { image: cake3, title: 'The chocolate drip cake', price: 35, quantity: 1, totalPrice: 0 },
        { image: cake4, title: 'The icecream cone cake', price: 25, quantity: 1, totalPrice: 0 },
        { image: cake5, title: 'The blue wedding cake', price: 41, quantity: 1, totalPrice: 0 },
        { image: cake6, title: 'The pink tall cake', price: 21, quantity: 1, totalPrice: 0 },
        { image: cake7, title: 'Colorful Macaroons', price: 15, quantity: 1, totalPrice: 0 },
        { image: cake8, title: 'Orange fruit cake', price: 16, quantity: 1, totalPrice: 0 }],
        games: [{ image: game1, title: 'Adventurous Railway', price: 30, quantity: 1, totalPrice: 0 },
        { image: game2, title: 'Sammy Suafeas', price: 10, quantity: 1, totalPrice: 0 },
        { image: game3, title: 'Logical thinking game', price: 35, quantity: 1, totalPrice: 0 },
        { image: game4, title: 'Train disaster', price: 25, quantity: 1, totalPrice: 0 },
        { image: game5, title: 'Drop the balls', price: 41, quantity: 1, totalPrice: 0 },
        { image: game6, title: 'Exciting pinballs', price: 21, quantity: 1, totalPrice: 0 }],
        bags: [{ image: bag1, title: 'Black and Red Tulip', price: 30, quantity: 1, totalPrice: 0 },
        { image: bag2, title: 'Sweet Pink Tulip', price: 10, quantity: 1, totalPrice: 0 },
        { image: bag3, title: 'Natural Yellow Tulip', price: 35, quantity: 1, totalPrice: 0 },
        { image: bag4, title: "Doctor's Maroon", price: 25, quantity: 1, totalPrice: 0 },
        { image: bag5, title: "Doctor's Navy", price: 41, quantity: 1, totalPrice: 0 },
        { image: bag6, title: "Doctor's Black", price: 21, quantity: 1, totalPrice: 0 }],
        checkOut: [],
        favourite: [],
        components: [true, true, true],
        total: 0,
        valPrice: 1
    }

    updateCheckout = (ind) => {
        let newItem = this.state.cakes[ind]
        newItem.quantity = 1
        this.setState({ checkOut: [...this.state.checkOut, newItem] })
        this.setState({ total: this.state.total + this.state.cakes[ind].price })
    }
    updateCheckoutGames = (ind) => {
        let newItem = this.state.games[ind]
        newItem.quantity = 1
        this.setState({ checkOut: [...this.state.checkOut, newItem] })
        this.setState({ total: this.state.total + this.state.games[ind].price })
    }
    updateCheckoutBags = (ind) => {
        let newItem = this.state.bags[ind]
        newItem.quantity = 1
        this.setState({ checkOut: [...this.state.checkOut, newItem] })
        this.setState({ total: this.state.total + this.state.bags[ind].price })
    }
    deleteItem = (ind) => {
        const newList = [...this.state.checkOut].filter((el, index) => index !== ind)
        this.setState({ checkOut: [...newList] })
        this.setState({ total: this.state.total - this.state.checkOut[ind].price*this.state.checkOut[ind].quantity })
    }
    addQuantity = (index) => {
        const newData = [...this.state.checkOut]
        newData[index].quantity += 1
        this.setState({ checkOut: newData })
        let dataCal = 0
        for (let i = 0; i < newData.length; i++) {
            dataCal += newData[i].price * newData[i].quantity
        }
        this.setState({ total: dataCal })
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
                    {this.state.checkOut.length>0 &&<div>
                        <h2>CheckOut</h2>
                         {this.state.checkOut.map((el, index) => <div className="checkoutOuter" key={index + 1}>
                            <div className="checkOutLeft">
                                <img src={el.image} />
                                <div>{el.title}</div>
                            </div>

                            <div className="checkOutRight" >
                                <div className="checkOutQuantity" style={{ display: 'flex'}}>
                                    <button onClick={() => this.addQuantity(index)}>+</button>
                                    <div style={{ width: "20px", paddingLeft: "5px" }} >{el.quantity}</div>
                                </div>
                                <div>${el.price * el.quantity}</div>
                                <Button icon={<DeleteFilled style={{ fontSize: '20px' }} />} style={{ color: 'maroon', background: 'white', border: 'none' }} onClick={() => this.deleteItem(index)}></Button>
                            </div>
                        </div>)}
                        <div className="totalPrice">
                            <div>Total</div>
                            <div>${this.state.total}</div>
                        </div>
                    </div>}
                    {this.state.checkOut.length <= 0 && <div>
                        <h2>CheckOut</h2>
                        <p>You have no checkout items. Checkout our new promotions!</p>
                    </div>}
                </div>
                <footer></footer>
            </div>
        )
    }
}

export default Shopping
