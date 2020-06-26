import React, { Component } from 'react'
import me from './me.jpg';
import './style.css';

class Header extends Component {
    state = {
        headerItems: [
            { icon: 'fa fa-phone', info: '085-910-2653', classEdit: 'header-items' },
            { icon: 'fa fa-envelope', info: 'nicha_nga@hotmail.com', classEdit: 'header-items' },
            { icon: 'fa fa-map-marker', info: 'Bangkok, Thailand', classEdit: 'header-items' },
            { icon: 'fa fa-linkedin', info: 'LinkedIn', classEdit: 'header-items' }
        ],
        newValue: '',
        updateNeeded: false,
        buttonTxt: 'Input values to update and click button'
    }
    updateInfo = () => {
        this.setState({ updateNeeded: true })
        this.setState({ buttonTxt: 'Then click on the header value you want to update' })
    }
    displayIndex = (index) => {
        console.log(index, this.state.newValue)
        let newItems = [...this.state.headerItems]
        let valueItem = { icon: '', info: this.state.newValue, classEdit: 'edit-items' }
        if (this.state.newValue && this.state.updateNeeded) {
            newItems.splice(index, 1, valueItem)
            this.setState({ headerItems: newItems })
            this.setState({ newValue: '' })
            this.setState({ buttonTxt: 'Completed!' })
        }
        // this.setState({headerItems[index] : '1'})
    }
    render() {
        return (
            <div class="header-wrapper">
                <input type="text" value={this.state.newValue} onChange={(e) => this.setState({ newValue: e.target.value })}/><button onClick={this.updateInfo}>{this.state.buttonTxt}</button>
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
                    {this.state.headerItems.map((el, index) => <div className={el.classEdit} onClick={() => { this.displayIndex(index) }}>
                        <div><i className={el.icon} aria-hidden="true" style={{ color: 'white', marginRight: '5px' }}></i></div>
                        <div className="info">{el.info}</div>
                    </div>)}
                </div>
            </div>
        )
    }
}

export default Header
