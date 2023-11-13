import React from "react";
import image1 from '../assets/images/1.jpg';
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap"; // Import Navbar and NavbarBrand from React Bootstrap
import "./Navbar.css";

function MyNavbar() {
  return (
    <Navbar className="my-2" >
      <NavbarBrand href="/">
        <img className="logoImage"
          alt="logo"
          src={image1}
        
        />
      </NavbarBrand>
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



    </Navbar>
  );
}

export default MyNavbar;
