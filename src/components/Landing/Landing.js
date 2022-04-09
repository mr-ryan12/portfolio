import React from 'react';
import redRocks from '../../assets/red-rocks.png';
import './Landing.scss';

const Landing = () => {
  return (
    <section className="hero-image-container">
      <img src={redRocks} alt="Red Rocks Amphitheatre" className="hero-image"/>
    </section>

  )
}

export default Landing;