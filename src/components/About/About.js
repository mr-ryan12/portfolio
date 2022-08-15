import React from "react";
import { motion } from "framer-motion";
import "./About.scss";

const About = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="about-container"
    >
      <h2 className="about-header">About</h2>
      <p className="about-text">
        Well hello there and thank you for visiting my portfolio page!
        <br />
        <br />
        A little about me:
        <br />
        I used to be in the human services field and mentored adults with
        developmental disabilities until I discovered enjoyment building web
        applications.
        <br />
        <br />
        I'm a recent graduate of the Turing School of Software and Design's
        Front End Engineering program in Denver, CO and finishing my internship
        at Vizio. Really excited to start my new career as a software developer!
        Feel free to reach out{" "}
        <a href="mailto:mr.ryan444@gmail.com" className="contact-email">
          anytime!
        </a>
      </p>
    </motion.div>
  );
};

export default About;
