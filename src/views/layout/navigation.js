
import React from 'react'
import { Link } from 'react-router'

export default (props) => (
  <nav>
    <ul>
      <li><Link to='/'>Main</Link></li>
      <li><Link to='/about'>About</Link></li>
    </ul>
  </nav>
)
