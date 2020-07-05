import React,{Component} from 'react'
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

class Cakes extends Component {
    state = {
        cakes:[{ image: cake1,title: 'The black wedding cake',price: 30},
        { image: cake2,title: 'The pink jolly cupcake',price: 10},
        { image: cake3,title: 'The chocolate drip cake',price:35},
        { image: cake4,title: 'The icecream cone cake',price:25},
        { image: cake5,title: 'The blue wedding cake',price: 41},
        { image: cake6,title: 'The pink tall cake',price:21},
        { image: cake7,title: 'Colorful Macaroons',price:15},
        { image: cake8,title: 'Orange fruit cake',price:16}],

        games: [{ image: game1, title: 'Adventurous Railway', price: 30 },
        { image: game2, title: 'Sammy Suafeas', price: 10 },
        { image: game3, title: 'Logical thinking game', price: 35 },
        { image: game4, title: 'Train disaster', price: 25 },
        { image: game5, title: 'Drop the balls', price: 41 },
        { image: game6, title: 'Exciting pinballs', price: 21 }],

        checkout:[]
    }
    updateCheckout = (ind) => {
        const newItem = this.state.cakes[ind]
        this.setState({checkout:[...this.state.checkout,newItem]})
        console.log(this.state.checkout)
    }
    render(){
        
        return (
            <div className="outerDiv">
                {this.state.cakes.map((el,index) => <div className="itemCard" key={index+1}>
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
            </div>
        )
    }

}

export default Cakes
