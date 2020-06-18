import React from 'react';
import { Link } from 'react-router-dom';
// import './App.css';
function Nav() {
    const navStyle = {
        color:'white',
        textDecoration:'none'
    }
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
            <Link style={navStyle} to='/'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/todo'>
                    <li>Todo</li>
                </Link>
                <Link style={navStyle} to='/calculator'>
                    <li>Mini-Calculator</li>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav;