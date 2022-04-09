import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';

const Header = () => {
  return (
    <nav>
      <h1>Ryan McBride</h1>
      <section className="link-container">
        <Link to='/about' className="hover-underline-animation">About</Link>
        <Link to='/resume' className="hover-underline-animation">Resume</Link>
        <Link to='/contact' className="hover-underline-animation">Contact</Link>
        <a target="_blank" href="https://github.com/mr-ryan12" className="hover-underline-animation">GitHub</a>
        <a target="_blank" href="https://www.linkedin.com/in/j-ryan-mcbride/" className="hover-underline-animation">LinkedIn</a>
      </section>
    </nav>
  )
}

export default Header;