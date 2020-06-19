import React from 'react';
import './Home.css';
import Donut from './donut_SVG.svg'

function Home() {
    return (
        <div className="homeWrapper">
            <h1 style={{margin:0}}>Welcome!</h1>
            <img src={Donut} alt="React Logo" style={{height:'350px'}}/>
        </div>
    )
}
export default Home;