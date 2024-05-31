import React, { useState, useEffect } from 'react';
import { List } from "@phosphor-icons/react";
import { Link, useLocation } from 'react-router-dom'; // Import useLocation hook
import '../home.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Gunakan useLocation hook

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 100) {
        navbar.classList.add('fixed');
      } else {
        navbar.classList.remove('fixed');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  useEffect(() => {
    const initializeGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en' },
          'google_translate_element'
        );
      }
    };

    const script = document.createElement('script');
    script.src = "https://translate.google.com/translate_a/element.js?cb=initializeGoogleTranslate";
    script.async = true;
    script.onload = initializeGoogleTranslate; // Panggil initializeGoogleTranslate setelah script selesai dimuat
    document.body.appendChild(script);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <img src="images/logo.png" className="logo" alt="Logo" />
      <div id="menu-icon" className="icon" onClick={handleMenuToggle}>
        <List size={32} />
      </div>
      <ul id="menu-list" className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
        <li className="pt-4"><Link to="/" className={location.pathname === '/' ? 'active' : ''}>HOME</Link></li>
        <li className="pt-4"><Link to="/show" className={location.pathname === '/show' ? 'active' : ''}>SHOW</Link></li>
        <li className="pt-4"><Link to="/maps" className={location.pathname === '/maps' ? 'active' : ''}>MAPS</Link></li>
        <li className="pt-4"><Link to="/translate" className={location.pathname === '/translate' ? 'active' : ''}>TRANSLATE</Link></li>
        <li className="pt-4"><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>ABOUT US</Link></li>
        <li>
          <div id="google_translate_element"></div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
