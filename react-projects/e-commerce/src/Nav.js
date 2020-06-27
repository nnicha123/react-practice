import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navEcommerce">
                    <h3>Logo</h3>
                    <ul>
                        <Link to='/'>
                            <li>Home</li>
                        </Link>
                        <Link to='/login'>
                            <li>Login</li>
                        </Link>
                        <Link to='/checkout'>
                            <li>Checkout</li>
                        </Link>
                        <Link to='/contactus'>
                            <li>Contact Us</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav
