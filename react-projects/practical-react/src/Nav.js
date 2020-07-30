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
        <Link to='/color-picker'>
          <li>Color Picker</li>
        </Link>
        <Link to='/credit-cards'>
          <li>Credit Cards</li>
        </Link>
        <Link to='/date-picker'>
          <li>Date Picker</li>
        </Link>
        <Link to='/mdx-deck'>
          <li>MDX Deck</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav
