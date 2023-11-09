import React from "react";
import image1 from '../assets/images/1.jpg'
import { Link } from "react-router-dom";
import "./Navbar.css"; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"> <img src={image1} alt="Image 6" /></Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">CloudProAI</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        
        <li>
          <Link to="/industries">Industries</Link>
        </li>
        <li>
          <Link to="/careers">Careers</Link>
        </li>
        <li>
          <Link to="/partnership">Partnerships</Link>
        </li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </nav>
  );
}

export default Navbar;
