import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
          <Link to='/'>MUNCHHUB</Link>
        </div>
        <ul className='nav-links'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='contact'>Contact</Link></li>
        </ul>

    </div>
  )
}

export default Navbar