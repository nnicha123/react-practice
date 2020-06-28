import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="testLinks">
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/childone'>
                    <li>Child One</li>
                </Link>
                <Link to='/childtwo'>
                    <li>Child two</li>
                </Link>

            </ul>
        </nav>
    )
}

export default Nav
