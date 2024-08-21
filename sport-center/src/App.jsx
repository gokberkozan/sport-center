import React, { useState } from 'react';
import Navbar from './assets/Navbar.jsx';
import HeroSection from './assets/HeroSection.jsx';
import ClassesSection from './assets/ClassesSection.jsx';
import TrainerSection from './assets/TrainerSection.jsx';
import ReviewSection from './assets/ReviewSection.jsx';
import ContactSection from './assets/ContactSection';
import Footer from './assets/footer.jsx';
import BmiSection from './assets/BmiSection.jsx';
import './App.css';

function App() {
  const [navbarBg, setNavbarBg] = useState(false);

  const toggleMenu = () => {
  };

  window.addEventListener('scroll', () => {
    setNavbarBg(window.scrollY > 0);
  });

  return (
    <div className={`App ${navbarBg ? 'navbar-bg' : ''}`}>
      <Navbar />
      <HeroSection />
      <ClassesSection />
      <BmiSection />
      <TrainerSection />
      <ReviewSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
