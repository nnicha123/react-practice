import React, { Component } from 'react'
import { Button } from 'antd'
import { ShoppingFilled, HeartFilled, UserOutlined } from '@ant-design/icons';
import './Cakes.css'
import bag1 from './bags/black-red-tulip.jpg'
import bag2 from './bags/red-pink-tulip.jpg'
import bag3 from './bags/natural-yellow-tulip.jpg'
import bag4 from './bags/doctor-maroon.jpg'
import bag5 from './bags/doctor-navy.jpg'
import bag6 from './bags/doctor-black.jpg'

class Bags extends Component {
    state = {
        cakes: [{ image: bag1, title: 'Black and Red Tulip', price: 30 },
        { image: bag2, title: 'Sweet Pink Tulip', price: 10 },
        { image: bag3, title: 'Natural Yellow Tulip', price: 35 },
        { image: bag4, title: "Doctor's Maroon", price: 25 },
        { image: bag5, title: "Doctor's Navy", price: 41 },
        { image: bag6, title: "Doctor's Black", price: 21 }]
    }
    render() {
        return (
            <div className="outerDiv">
                {this.state.cakes.map(el => <div className="itemCard">
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

export default Bags
