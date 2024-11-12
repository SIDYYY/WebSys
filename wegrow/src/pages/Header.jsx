import React, { useEffect } from 'react';
import projectLogo from '../imgs/favicon.ico';
import { FaEnvelope,  FaList,FaInfoCircle, FaHome} from 'react-icons/fa';
import '../styles/wegrow.css'

function Header() {
  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      const mainContent = document.getElementById('main-content');
      const menuContainer = document.querySelector('.menu-container');

      if (mainContent && menuContainer) {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        const mainContentRect = mainContent.getBoundingClientRect();
        const mainContentTop = mainContentRect.top + scrollPosition;
        const mainContentBottom = mainContentTop + mainContentRect.height;

        if (scrollPosition >= mainContentBottom || scrollPosition < mainContentTop) {
          menuContainer.classList.add('visible');
        } else {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            menuContainer.classList.remove('visible');
          }, 100);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="menu-container">
      <a href="#main-content" className="menu-logo">
        <img src={projectLogo} alt="logo" />
      </a>
      <input type="checkbox" aria-label="Toggle menu" />
      <span></span>
      <span></span>
      <span></span>
      <div className="menu">
        <ul>
          <li><a href="#main-content"><FaHome/> Home</a></li>
          <li><a href="#abouts"><FaInfoCircle/> About Us</a></li>
          <li><a href="#categ"><FaList/> Category</a></li>
          <li><a href="#contact"><FaEnvelope/> Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

