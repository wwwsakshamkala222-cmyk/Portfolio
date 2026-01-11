import React from 'react';
import InfoCard from './InfoCard';
import './About.css';

const About = () => {
  const cards = [
    {
      icon: 'fa-code',
      title: 'Languages',
      description: 'HTML, CSS, JavaScript, Python, CPP, React',
    },
    {
      icon: 'fa-graduation-cap',
      title: 'Education',
      description: 'Btech in Computer Science',
    },
    {
      icon: 'fa-folder-open',
      title: 'Projects',
      description: 'Building Projects as time passes',
    },
  ];

  return (
    <section className="about" id="about">
      <p>ABOUT ME</p>
      <div className="title">
        <h1>Building Meaningful</h1>
        <h1>Digital Experiences</h1>
      </div>
      <div className="hrrr">
        <hr />
      </div>
      <div className="about-container">
        <div className="info-about">
          <div className="about-info">
            <p>
              I'm a creative Cloud developer passionate about building modern and responsive web experiences.
              <br />My journey began with a love for design and evolved into a deep curiosity for how the web works - combining
              logic with creativity to bring ideas to life.
            </p>
            <p>
              When I'm not coding, I enjoy playing physical sports, staying active, and maintaining a healthy work-life balance.
              <br />I believe in continuous learning, attention to detail, and the power of clean, meaningful design.
              <br />Combining technical expertise with physical fitness keeps me energized and focused.
            </p>
          </div>
          <h2>What Drives Me</h2>
          <div className="card">
            {cards.map((card, index) => (
              <InfoCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;