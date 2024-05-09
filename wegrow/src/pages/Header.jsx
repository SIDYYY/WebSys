import React from 'react';
import projectLogo from '../imgs/favicon.ico';
import '../styles/wegrow.css'

function Header() {
    return (
      <nav className="menu-container">
        <a href="#main-content" className="menu-logo">
          <img src={projectLogo} alt="logo"/> 
        </a>
    
        <input type="checkbox" aria-label="Toggle menu" />
        <span></span>
        <span></span>
        <span></span>
    
        <div className="menu">
          <ul>
            <li><a href="#main-content"><i className="fas fa-home"></i> Home</a></li>
            <li><a href="#about"><i className="fas fa-info-circle"></i> About Us</a></li>
            <li><a href="#categ"><i className="fas fa-book-open"></i> Category</a></li>
            <li><a href="#contacts"><i className="fas fa-envelope"></i> Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  


export default Header;