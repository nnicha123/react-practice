import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/react-icons">
          <li>Icons</li>
        </Link>
        <Link to="/react-toast">
          <li>Toast</li>
        </Link>
        <Link to="/react-tippy">
          <li>Tippy</li>
        </Link>
        <Link to="/react-modal">
          <li>Modal</li>
        </Link>
        <Link to="/react-countup">
          <li>Countup</li>
        </Link>
        <Link to='/idle-timer'>
          <li>Idle Timer</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav
