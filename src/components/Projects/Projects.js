import React from 'react';
import githubLogo from '../../assets/github-logo.png'
import './Projects.scss';

const Projects = () => {
  return (
    <section className="projects-container">
      <h2 className="projects-header">Projects</h2>
      <section className="projects-card">
        <h3 className="project-title">Troubadour</h3>
        <section className="logo-container">
          <p>icon</p>
          <img src={githubLogo} alt="GitHub Logo" className="github-logo"/>
        </section>
      </section>
    </section>
  )
}

export default Projects;