import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
// import './App.css';
function Nav() {
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to='/'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/quotes'>
                    <li>Quotes</li>
                </Link>
                <Link style={navStyle} to='/todo'>
                    <li>Todo</li>
                </Link>
                <Link style={navStyle} to='/calculator'>
                    <li>Mini-Calculator</li>
                </Link>
                <Link style={navStyle} to='/weather'>
                    <li>Mini-weather</li>
                </Link>
                <Link style={navStyle} to='/cards'>
                    <li>Cards</li>
                </Link>
                <Link style={navStyle} to='/counter'>
                    <li>Counter</li>
                </Link>
                <Link style={navStyle} to='/sort'>
                    <li>Sort Project</li>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav;