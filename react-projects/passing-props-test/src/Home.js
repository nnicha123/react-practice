import React, { Component } from 'react'
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
import './Home.css'
class Home extends Component {
    state = {
        cakeInfo: [
            { image: cake1,title: 'The black wedding cake',paragraph: 'The most beautiful cake ever with chocolate and rose topped'},
            { image: cake2,title: 'The pink jolly cupcake',paragraph: 'The most delicate pink cupcake ever made!'},
            { image: cake3,title: 'The chocolate drip cake',paragraph: 'Topped with sour raspberries and 3 icecream layers'},
            { image: cake4,title: 'The icecream cone cake',paragraph: 'Sprinkled with joy and dripping with delicious jam'},
            { image: cake5,title: 'The black wedding cake',paragraph: 'The most beautiful cake ever with chocolate and rose topped'},
            { image: cake6,title: 'The black wedding cake',paragraph: 'The most beautiful cake ever with chocolate and rose topped'},
            { image: cake7,title: 'The black wedding cake',paragraph: 'The most beautiful cake ever with chocolate and rose topped'},
            { image: cake8,title: 'The black wedding cake',paragraph: 'The most beautiful cake ever with chocolate and rose topped'},
            { image: cake9,title: 'The black wedding cake',paragraph: 'The most beautiful cake ever with chocolate and rose topped'},
            { image: cake10,title: 'The black wedding cake',paragraph: 'The most beautiful cake ever with chocolate and rose topped'},
            { image: cake11,title: 'The black wedding cake',paragraph: 'The most beautiful cake ever with chocolate and rose topped'},
            { image: cake12,title: 'The black wedding cake',paragraph: 'The most beautiful cake ever with chocolate and rose topped'},
        ],
        liked: [{ image: cake2, title: 'The pink jolly cupcake', paragraph: 'The most delicate pink cupcake ever made!' },]
    }
    addLike = (index) => {
        const newLikes = this.state.cakeInfo[index]
        this.setState({ liked: [...this.state.liked, newLikes] })
    }
    render() {
        return (
            <>
                <div className="outerCardWrap">
                    {this.state.cakeInfo.map((el, index) => <div className="cakeCard">
                        <div className="cardTop">
                            <img src={el.image} />
                            <div className="titleCard">{el.title}</div>
                            <div className="paragraphCard">{el.paragraph}</div>
                        </div>
                        <div className="cardBottom">
                            <button onClick={() => this.addLike(index)}>Like</button>
                        </div>
                    </div>)}
                </div>
                <div>
                    <h3>New Likes</h3>
                    <button onClick={() => this.props.data.changeLikes(this.state.liked)}>Need to click this button to update likes</button>
                    {this.state.liked.map(el => <div className="likedItems">
                        <img src={el.image} />
                        <p>{el.title}</p>
                    </div>)}
                </div>
            </>
        )
    }
}

export default Home
