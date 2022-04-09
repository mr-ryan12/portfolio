import React from 'react';
import { Link } from 'react-router-dom';
import './FourOhFour.scss';

const FourOhFour = () => {
  return (
    <section className="four-oh-four-container">
      <h2 className="four-oh-four-header">404: Sorry, that page is not found</h2>
      <Link to="/" className="home-link">Back to safety</Link>
    </section>
  )
}

export default FourOhFour;