import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
  FaArrowRight,
  FaDownload
} from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  // Scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Open CV in new tab
  const handleOpenCV = () => {
    window.open('/Resume.pdf', '_blank');
  };

  return (
    <section className="home" id="home">
      <p className="home-p">
        <span className="home-s">· </span>Available for freelance work
      </p>
      <div className="home-container">
        <div className="home-section">
          <div className="info-home">
            <h1>Hi, I'm Saksham Kala</h1>
            <h3>
              <TypeAnimation
                sequence={[
                  'Cloud Developer',
                  2000,
                  'React Developer',
                  2000,
                  'Backend Developer',
                  2000,
                  'Software Manager',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
                style={{ display: 'inline-block' }}
              />
            </h3>
            <div className="info-p">
              <p>Cloud architecture and web development enthusiast who learns by building.</p>
              <p>Open to opportunities to collaborate and grow.</p>
            </div>
            <div className="info-p2">
              <p><FaMapMarkerAlt /> Based in India</p>
              <p><FaBriefcase /> Available Now</p>
            </div>
            <div className="btnn">
              <button className="btn-home1" onClick={scrollToContact}>
                <FaArrowRight /> Hire Me
              </button>
              <button className="btn-home2" onClick={handleOpenCV}>
                <FaDownload /> View CV
              </button>
            </div>
            <div className="hhr">
              <hr />
            </div>
            <div className="follow">
              <p className="followw">Follow me:</p>
              <ul>
                <li>
                  <a 
                    href="https://github.com/wwwsakshamkala222-cmyk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/saksham-kala-558776288/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:sakshamkala111@gmail.com"
                    aria-label="Email"
                  >
                    <FaEnvelope />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img src="/images/img2.jpg" alt="Saksham Kala" />
      </div>
    </section>
  );
};

export default Hero;