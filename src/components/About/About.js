import React from 'react';
import { motion } from 'framer-motion';
import './About.scss';

const About = () => {
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: .4 }} className="about-container">
        <h2 className="about-header">About</h2>
        <p className="about-text">Well hello there and thank you for visiting my portfolio page!
        <br />
        <br />
        A little about me:
        <br />
        I used to be in human services and mentored adults with developmental disabilities until I discovered enjoyment in building web applications. I'm currently finishing up my frontend engineering program at the Turing School of Software and Design in Denver, CO. Really excited to start my new career as a software developer! Feel free to reach out anytime!</p>
    </motion.div>
  )
}

export default About;