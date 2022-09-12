import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <div className='container'>
      <div className='navbar'>
        <Link className='nav__link' to='/'>
          <div className='navbar__logo'>
            <img src={require('./Images/medictry.png')} alt="Medictry" />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar