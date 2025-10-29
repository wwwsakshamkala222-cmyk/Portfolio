import React from 'react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const navLinks = ['Home', 'About', 'Projects', 'Services', 'Contact'];
  
  const socialLinks = [
    { 
      icon: <FaGithub />, 
      url: 'https://github.com/wwwsakshamkala222-cmyk',
      label: 'GitHub'
    },
    { 
      icon: <FaLinkedin />, 
      url: 'https://www.linkedin.com/in/saksham-kala-558776288/',
      label: 'LinkedIn'
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">Saksham Kala</h2>
        <ul className="footer-links">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
        <div className="footer-social">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="footer-copy">&copy; 2025 Saksham Kala. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;