import React from 'react';
import githubLogo from '../../assets/github-logo.png';
import troubadourLogo from '../../assets/troubadour-logo.png';
import phishLogo from '../../assets/phish-logo.png';
import artFromTheHeartLogo from '../../assets/art-from-the-heart-logo.png';
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
        <section className="projects-card">
          <h3 className="project-title">Phish</h3>
          <section className="logo-container">
            <a target="_blank" href="https://phish-showcase.vercel.app/"><img src={phishLogo} alt="Phish Logo" className="phish-logo"/></a>
            <a target="_blank" href="https://github.com/mr-ryan12/phish"><img src={githubLogo} alt="GitHub Logo" className="github-logo"/></a>
          </section>
        </section>
        <section className="projects-card">
          <h3 className="project-title">Art From the Heart</h3>
          <section className="logo-container">
            <a target="_blank" href="https://art-from-the-heart.vercel.app/"><img src={artFromTheHeartLogo} alt="Art from the Heart Logo" className="art-from-the-heart-logo"/></a>
            <a target="_blank" href="https://github.com/mr-ryan12/art-from-the-heart"><img src={githubLogo} alt="GitHub Logo" className="github-logo"/></a>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Projects;