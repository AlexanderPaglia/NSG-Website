// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import 'C:/Users/alexp/nextstepgamingtalent/src/styles/Navbar.css'; // Import your CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/team">Our Team</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
