import React, { Component } from 'react'
import me from './me.jpg';
import './style.css';

class Header extends Component {
    state = {
        headerItems: [
            { icon: 'fa fa-phone', info: '085-910-2653' },
            { icon: 'fa fa-envelope', info: 'nicha_nga@hotmail.com' },
            { icon: 'fa fa-map-marker', info: 'Bangkok, Thailand' },
            { icon: 'fa fa-linkedin', info: 'LinkedIn' }
        ]
    }
    render() {
        return (
            <div class="header-wrapper">
                <div className="header">
                    <div className="head-left">
                        <h2>Nicha Ngamtweerat</h2>
                        <h3 style={{ color: '#FFD027', margin: '5px 0' }}>Electronics Engineer</h3>
                        <p>Electronics engineer with experiences in 2 different automobile companies as both a strategic planner
                        and a software engineer. Strong expertise in engineering but also in the management sector.</p>
                    </div>
                    <div className="head-right">
                        <img src={me} alt="logo" />
                    </div>
                </div>
                <div className="head-bottom">
                    {this.state.headerItems.map(el => <div className="header-items">
                        <div><i className={el.icon} aria-hidden="true" style={{ color: 'white', marginRight: '5px' }}></i></div>
                        <div className="info">{el.info}</div>
                    </div>)}
                </div>
            </div>
        )
    }
}

export default Header
