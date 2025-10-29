import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [visible, setVisible] = useState({
    text: false,
    mainIcon: false,
    subIcons: [false, false, false],
    designer: false,
  });

  useEffect(() => {
    const timers = [
      setTimeout(() => setVisible((v) => ({ ...v, text: true })), 0),
      setTimeout(() => setVisible((v) => ({ ...v, mainIcon: true })), 800),
      setTimeout(() => setVisible((v) => ({ ...v, subIcons: [true, false, false] })), 1600),
      setTimeout(() => setVisible((v) => ({ ...v, subIcons: [true, true, false] })), 2000),
      setTimeout(() => setVisible((v) => ({ ...v, subIcons: [true, true, true] })), 2400),
      setTimeout(() => setVisible((v) => ({ ...v, designer: true })), 2800),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div id="loading-screen">
      <div className="loading-content">
        <i className={`fa-solid fa-laptop-code fa-5x main-icon ${visible.mainIcon ? 'fall' : 'hidden'}`}></i>
        <h1 className={`${visible.text ? 'fall' : 'hidden'}`}>MY PROFILE</h1>
        <div className="sub-icons">
          <i className={`fa-brands fa-github fa-2x ${visible.subIcons[0] ? 'fall' : 'hidden'}`}></i>
          <i className={`fa-solid fa-code fa-2x ${visible.subIcons[1] ? 'fall' : 'hidden'}`}></i>
          <i className={`fa-solid fa-user fa-2x ${visible.subIcons[2] ? 'fall' : 'hidden'}`}></i>
        </div>
        <h2 className={`${visible.designer ? 'fall' : 'hidden'}`}>Designed by Saksham</h2>
      </div>
    </div>
  );
};

export default LoadingScreen;