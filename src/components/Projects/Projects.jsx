import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projectsData';
import './Projects.css';

const Projects = () => {
  return (
    <section className="project" id="project">
      <p>PROJECTS</p>
      <h1>Featured Work</h1>
      <hr />
      <div className="info-pro">
        <p>Showcasing my work in cloud development, web applications,</p>
        <p>and AI-powered solutions with modern technologies.</p>
      </div>
      <div className="projects-container">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
    
  );
};

export default Projects;