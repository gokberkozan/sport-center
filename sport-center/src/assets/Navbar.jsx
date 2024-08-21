import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const navbarMenu = document.getElementById("navbarUl");
    const navbarMenuToggle = document.querySelector(".navbar-menu-toggle");
    navbarMenu.classList.toggle("active");
    navbarMenuToggle.classList.toggle("active");
  };

  useEffect(() => {
    const navbarbg = document.querySelector('.navbarbg');

    const handleScroll = () => {
      if (window.scrollY > 0) {
        navbarbg.style.backgroundColor = '#355592';
      } else {
        navbarbg.style.backgroundColor = 'transparent';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='done'>
       <div className={`out-navbar ${isMenuOpen ? 'active' : ''}`}>
      <div className="navbarbg">
        <div className="navbar">
          <img className="logo" src="../src/Images/logo.png" alt="Logo_powerfull" />

          <div className="sidebyside">
            <div className="navbar-menu-toggle" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="menu-wrapper">
              <ul className="navbar-ul" id="navbarUl">
                <li><a href="#top">Home</a></li>
                <li><a href="#secondback">Classes</a></li>
                <li><a href="#part-3">Trainer</a></li>
                <li><a href="#review">Review</a></li>
                <li><a href="#contact">Contact us</a></li>
                <li>
                  <a href="#contact"></a>
                  <button className="join" onClick={() => window.location.href = '#footer'}>JOIN US</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
