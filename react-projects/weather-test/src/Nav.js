import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    const navWeather = {
        color:'white',
    }
    return (
        <nav>
            <h3>Left Logo</h3>
            <ul className="nav-links">
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/daily'>
                    <li>Daily</li>
                </Link>
                <Link to='/current'>
                    <li>Current</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
