import React from 'react';
import githubLogo from '../../assets/github-logo.png';
import troubadourLogo from '../../assets/troubadour-logo.png';
import './Projects.scss';

const Projects = () => {
  return (
    <section className="projects-container">
      <h2 className="projects-header">Projects</h2>
      <section className="project-cards-container">
        <section className="projects-card">
          <h3 className="project-title">Troubadour</h3>
          <section className="logo-container">
            <a target="_blank" href="https://troubadour-fe.herokuapp.com/"><img src={troubadourLogo} alt="Troubadour Logo" className="troubadour-logo"/></a>
            <a target="_blank" href="https://github.com/Troubadour-Project/troubadour-fe"><img src={githubLogo} alt="GitHub Logo" className="github-logo"/></a>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Projects;