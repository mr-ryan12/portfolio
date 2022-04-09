import React from 'react';
import { motion } from 'framer-motion';
import './Contact.scss';

const Contact = () => {
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: .4 }}>
      <section className="contact-container">
        <h2 className="contact-header">Contact</h2>
        <a target="_blank" href="mailto:mr.ryan444@gmail.com" className="contact-email">Email Me!</a>
      </section>
    </motion.div>
  )
}

export default Contact;