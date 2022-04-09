import React from 'react';
import resumePDF from '../../assets/resume.pdf';
import './Resume.scss';

const Resume = () => {
  return (
    <iframe src={resumePDF + '#toolbar=0'} className="resume"></iframe>
  )
}

export default Resume;