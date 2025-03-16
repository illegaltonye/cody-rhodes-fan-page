import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Cody Rhodes Fan Club</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/membership">Get Membership Card</Link>
      </div>
    </nav>
  );
}

export default Navbar;