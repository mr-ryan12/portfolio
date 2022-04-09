import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';

const Header = () => {
  return (
    <nav>
      <h1>Ryan McBride</h1>
      <Link to='/about'>About</Link>
      <Link to='/about'>Resume</Link>
      <Link to='/about'>Contact</Link>
      <Link to='/about'>About</Link>
    </nav>
  )
}

export default Header;