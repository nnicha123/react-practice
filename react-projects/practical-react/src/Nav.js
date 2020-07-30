import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/react-icons">
          <li>React Icons</li>
        </Link>
        <Link to="/react-toast">
          <li>React Toast</li>
        </Link>
        <Link to="/react-tippy">
          <li>React Tippy</li>
        </Link>
        <Link to="/react-modal">
          <li>React Modal</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav
