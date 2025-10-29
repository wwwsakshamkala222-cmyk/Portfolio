import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import './BackToTop.css';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      id="back-to-top"
      className={visible ? 'visible' : ''}
      onClick={scrollToTop}
    >
      <FaChevronUp />
    </div>
  );
};

export default BackToTop;