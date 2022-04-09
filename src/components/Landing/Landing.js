import React from 'react';
import redRocks from '../../assets/red-rocks.png';
import { motion } from 'framer-motion';
import './Landing.scss';

const Landing = () => {
  return (
    <motion.div animate={{ opacity: [0 ,1] }} transition={{ duration: 2 }}>
      <section className="hero-image-container">
        <img src={redRocks} alt="Red Rocks Amphitheatre" className="hero-image"/>
      </section>
    </motion.div>
  )
}

export default Landing;