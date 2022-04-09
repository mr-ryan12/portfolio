import React from 'react';
import resumePDF from '../../assets/resume.pdf';
import { motion } from 'framer-motion';
import './Resume.scss';

const Resume = () => {
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1.6 }}>
      <iframe src={resumePDF + '#toolbar=0'} className="resume"></iframe>
    </motion.div>
  )
}

export default Resume;