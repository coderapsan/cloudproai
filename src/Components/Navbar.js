import React from 'react'
// import {Routes, Route} from 'react-router-dom'
import image1 from '../assets/images/1.jpg';


function NavBar() {
  const handleMenuHover = (e) => {
    const submenu = e.target.querySelector('.submenu');
    if (submenu) {
      submenu.classList.toggle('show');
    }
  };

  return (
    <div className="navbar">
      
      <ul className="menu-list">
  <li className="footer-logo">
    <a href="/">
      <img src={image1} alt="Image 6" />
    </a>
  </li>
  <li className="menu-item" onMouseEnter={handleMenuHover} onMouseLeave={handleMenuHover}>
    <a href="#">
      Cloud Pro AI
    </a>
    <div className="submenu">
      <ul>
        <li><a href="/products">Products</a></li>
        <li><a href="/services">Services</a></li>
      </ul>
    </div>
  </li>
        <li className="menu-item" onMouseEnter={handleMenuHover} onMouseLeave={handleMenuHover}>
          <a href="/about">About Us</a>
          <div className="submenu">
            <ul>
              <li><a href="/team">Our Team</a></li>
              <li><a href="/mission">Our Mission</a></li>
            </ul>
          </div>
        </li>
        <li className="menu-item" onMouseEnter={handleMenuHover} onMouseLeave={handleMenuHover}>
          <a href="/about">Industries</a>
          <div className="submenu">
            <ul>
              <li><a href="/team">Education</a></li>
              <li><a href="/mission">Hopsital</a></li>
              <li><a href="/mission">Marketing</a></li>
              <li><a href="/mission">Hospitality</a></li>


            </ul>
          </div>
        </li>
        <li className="menu-item"><a href="/contact">Portfolio</a></li>
        <li className="menu-item"><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default NavBar;
