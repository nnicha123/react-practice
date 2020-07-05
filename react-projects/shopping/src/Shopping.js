import React, { Component } from 'react'
import Favourites from './Favourites'
import CheckOuts from './CheckOuts'
import cake1 from './cakes/blackwedding.PNG'
import cake2 from './cakes/cupcake.PNG'
import cake3 from './cakes/icecream.PNG'
import cake4 from './cakes/conecake.PNG'
import cake5 from './cakes/bluewedding.PNG'
import cake6 from './cakes/lightpinkcake.PNG'
import cake7 from './cakes/macaroons.PNG'
import cake8 from './cakes/orangecake.PNG'
import cake9 from './cakes/pinkcake1.PNG'
import Cakes from './Cakes'

class Shopping extends Component {
    state = {
        checkOut:[],
        favourite:[],
        cakes:[{ image: cake1,title: 'The black wedding cake',price: 30},
        { image: cake2,title: 'The pink jolly cupcake',price: 10},
        { image: cake3,title: 'The chocolate drip cake',paragraph: 'Topped with sour raspberries and 3 icecream layers'},
        { image: cake4,title: 'The icecream cone cake',price:25},
        { image: cake5,title: 'The blue wedding cake',price: 41},
        { image: cake6,title: 'The pink tall cake',price:21},
        { image: cake7,title: 'Colorful Macaroons',price:15},
        { image: cake8,title: 'Orange fruit cake',price:16}],
        games:[],
        bags:[]
    }
    render() {
        return (
            <div>
                <Cakes cakes={this.state.cakes}/>
                <Favourites/>
                <CheckOuts/>
            </div>
        )
    }
}

export default Shopping
