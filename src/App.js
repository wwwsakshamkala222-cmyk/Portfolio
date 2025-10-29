import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Services from './Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import useScrollReveal from './hooks/useScrollReveal';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import BackToTop from './components/BackToTop/BackToTop';
import './App.css';


function App() {
  useScrollReveal();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <div className={`main-page ${!loading ? 'visible' : ''}`}>
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

export default App;