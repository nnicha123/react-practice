import React, { Component } from 'react'
import me from './me.jpg';
import './style.css';

class Header extends Component {
    render() {
        return (
            <div class="header-wrapper">
                <div className="header">
                    <div className="head-left">
                        <h2>Nicha Ngamtweerat</h2>
                        <h3 style={{ color: '#FFD027', margin: '5px 0' }}>Electronics Engineer</h3>
                        <p>Electronics engineer with experiences in 2 different automobile companies as both a strategic planner
                        and
                    a software engineer. Strong expertise in engineering but also in the management sector.</p>
                    </div>
                    <div className="head-right">
                        <img src={me} alt="logo" />
                    </div>
                </div>
                <div className="head-bottom">
                    <div className="header-items">
                        <div><i className="fa fa-phone" aria-hidden="true" style={{color: 'white',marginRight: '5px'}}></i></div>
                        <div className="info">085-910-2653</div>
                    </div>
                    <div className="header-items">
                        <div><i className="fa fa-envelope" aria-hidden="true" style={{color: 'white',marginRight: '5px'}}></i></div>
                        <div className="info">nicha_nga@hotmail.com</div>
                    </div>
                    <div className="header-items">
                        <div><i className="fa fa-map-marker" aria-hidden="true" style={{color: 'white',marginRight: '5px'}}></i></div>
                        <div className="info">Bangkok, Thailand</div>
                    </div>
                    <div className="header-items">
                        <div><i className="fa fa-linkedin" aria-hidden="true" style={{color: 'white',marginRight: '5px'}}></i>
                        </div>
                        <div className="info">LinkedIn</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
