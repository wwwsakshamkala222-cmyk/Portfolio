import React from 'react';

const ProjectCard = ({ image, title, description, skills, github, demo, comingSoon }) => {
  return (
    <div className={`project-card ${comingSoon ? 'coming-soon' : ''}`}>
      <div className="project-image-wrapper">
        <img src={image} alt={title} />
        {comingSoon && (
          <div className="coming-soon-overlay">
            <div className="coming-soon-badge">Coming Soon</div>
          </div>
        )}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
      <div className="btns">
        <a 
          href={comingSoon ? '#' : github} 
          className={`btn ${comingSoon ? 'disabled' : ''}`}
          target={comingSoon ? '_self' : '_blank'}
          rel="noopener noreferrer"
          onClick={comingSoon ? (e) => e.preventDefault() : undefined}
        >
          <i className="fab fa-github"></i> {comingSoon ? 'In Development' : 'GitHub'}
        </a>
        <a 
          href={comingSoon ? '#' : demo} 
          className={`btn ${comingSoon ? 'disabled' : ''}`}
          target={comingSoon ? '_self' : '_blank'}
          rel="noopener noreferrer"
          onClick={comingSoon ? (e) => e.preventDefault() : undefined}
        >
          <i className="fas fa-external-link-alt"></i> {comingSoon ? 'Coming Soon' : 'Live Demo'}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;