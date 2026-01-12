import React, { useState } from 'react';
import useActiveSection from '../../hooks/useActiveSection';
import './Navigation.css';

const Navigation = () => {
  const { activeSection, scrollToSection } = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'home', icon: 'fa-house', label: 'Home' },
    { id: 'about', icon: 'fa-address-card', label: 'About' },
    { id: 'projects', icon: 'fa-folder-open', label: 'Projects' },
    { id: 'services', icon: 'fa-code', label: 'Services' },
    { id: 'contact', icon: 'fa-envelope', label: 'Contact' },
  ];

  return (
    <header className="header-list">
      <div className="div-list">
        {/* Mobile toggle button */}
        <button
          className="nav-toggle"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((s) => !s)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <ul className={`ul-list ${mobileOpen ? 'mobile-open' : ''}`}>
          {navItems.map((item) => (
            <li
              key={item.id}
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => setMobileOpen(false)}
            >
              <i className={`fa-regular ${item.icon}`}></i>
              <a href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navigation;