import React, { Component } from 'react'
import './Home.css'
import cake1 from './cakes/blackwedding.PNG'
import cake2 from './cakes/cupcake.PNG'
import cake3 from './cakes/icecream.PNG'
import cake4 from './cakes/conecake.PNG'
import cake5 from './cakes/bluewedding.PNG'
import cake6 from './cakes/lightpinkcake.PNG'
import cake7 from './cakes/macaroons.PNG'
import cake8 from './cakes/orangecake.PNG'
import cake9 from './cakes/pinkcake1.PNG'
import cake10 from './cakes/redglazed.jpg'
import cake11 from './cakes/turquoise.PNG'
import cake12 from './cakes/pinkcake2.PNG'
import heart from './cakes/heart.png'
import user from './cakes/user.png'
import location from './cakes/location.png'

class Home extends Component {
    state = {
        cakes: [
            {
                image: cake1,
                title: 'The black wedding cake',
                paragraph: 'The most beautiful cake ever with chocolate and rose topped'
            },
            {
                image: cake2,
                title: 'The pink jolly cupcake',
                paragraph: 'The most delicate pink cupcake ever made!'
            },
            {
                image: cake3,
                title: 'The chocolate drip cake',
                paragraph: 'Topped with sour raspberries and 3 icecream layers'
            },
            {
                image: cake4,
                title: 'The icecream cone cake',
                paragraph: 'Sprinkled with joy and dripping with delicious jam'
            },
            {
                image: cake5,
                title: 'The black wedding cake',
                paragraph: 'The most beautiful cake ever with chocolate and rose topped'
            },
            {
                image: cake6,
                title: 'The black wedding cake',
                paragraph: 'The most beautiful cake ever with chocolate and rose topped'
            },
            {
                image: cake7,
                title: 'The black wedding cake',
                paragraph: 'The most beautiful cake ever with chocolate and rose topped'
            },
            {
                image: cake8,
                title: 'The black wedding cake',
                paragraph: 'The most beautiful cake ever with chocolate and rose topped'
            },
            {
                image: cake9,
                title: 'The black wedding cake',
                paragraph: 'The most beautiful cake ever with chocolate and rose topped'
            },
            {
                image: cake10,
                title: 'The black wedding cake',
                paragraph: 'The most beautiful cake ever with chocolate and rose topped'
            },
            {
                image: cake11,
                title: 'The black wedding cake',
                paragraph: 'The most beautiful cake ever with chocolate and rose topped'
            },
            {
                image: cake12,
                title: 'The black wedding cake',
                paragraph: 'The most beautiful cake ever with chocolate and rose topped'
            },
        ],
        liked: [],
        likedBefore: false
    }
    checkLike = (index) => {
        this.setState({ likedBefore: true })
        const likedItem = this.state.cakes[index]
        const totalLiked = [...this.state.liked]
        this.setState({ liked: [...this.state.liked, likedItem] })
        console.log(likedItem)
    }
    removeLike = (index) => {
        const newLikes = [...this.state.liked].filter((el,idx) => idx !== index)
        console.log(newLikes)
        this.setState({liked:newLikes})
    }

    render() {
        return (
            <div>
                <div className="banner">
                    <div className="promotion">
                        <h3>The best promotions ever!</h3>
                    </div>
                </div>
                <div className="advertisementText">
                    Choose from a wide range of products!
                </div>
                <div className="products">
                    <div className="productCardWrapper">
                        {this.state.cakes.map((cake, index) => <div className="productCard">
                            <img src={cake.image} alt="cake" />
                            <div className="title">{cake.title}</div>
                            <p className="description">{cake.paragraph}</p>
                            <div className="icons">
                                <img style={{ width: 'auto', height: '20px' }} src={heart} onClick={() => this.checkLike(index)} />
                                <img style={{ width: 'auto', height: '20px' }} src={user} />
                                <img style={{ width: 'auto', height: '20px' }} src={location} />
                            </div>
                        </div>)}
                    </div>
                </div>
                <div className="advertisementText" style={{ textAlign: 'center' }}>
                    Hope you enjoyed the page!
                </div>
                {(this.state.likedBefore) && <div className="temporaryDiv">
                    <h3>Favourites</h3>
                    {this.state.liked.map((el,index) => <div className="arrangeLikes">
                        <div className="favouriteStart">
                            <img src={el.image} alt="cake" />
                            <div>{el.title}</div>
                        </div>
                        <div className="favouriteEnd" onClick={() => this.removeLike(index)}>
                            <div>Remove</div>
                        </div>
                    </div>)}
                </div>}
            </div>
        )
    }
}

export default Home
