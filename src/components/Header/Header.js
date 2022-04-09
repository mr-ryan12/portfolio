import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';

const Header = () => {
  return (
    <nav>
      <h1>Ryan McBride</h1>
      <section className="link-container">
        <Link to='/about'>About</Link>
        <Link to='/resume'>Resume</Link>
        <Link to='/contact'>Contact</Link>
        <a target="_blank" href="https://github.com/mr-ryan12">GitHub</a>
        <a target="_blank" href="https://www.linkedin.com/in/j-ryan-mcbride/">LinkedIn</a>
      </section>
    </nav>
  )
}

export default Header;