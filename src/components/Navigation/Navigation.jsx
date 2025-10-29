import React from 'react';
import useActiveSection from '../../hooks/useActiveSection';
import './Navigation.css';

const Navigation = () => {
  const { activeSection, scrollToSection } = useActiveSection();

  const navItems = [
    { id: 'home', icon: 'fa-house', label: 'Home' },
    { id: 'about', icon: 'fa-address-card', label: 'About' },
    { id: 'project', icon: 'fa-folder-open', label: 'Projects' },
    { id: 'services', icon: 'fa-code', label: 'Services' },
    { id: 'contact', icon: 'fa-envelope', label: 'Contact' },
  ];

  return (
    <header className="header-list">
      <div className="div-list">
        <ul className="ul-list">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={activeSection === item.id ? 'active' : ''}
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