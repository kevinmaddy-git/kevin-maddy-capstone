import React from 'react';
import { Link } from 'react-router-dom';
import "../Navbar/navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {}
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/video" className="nav-link">Videos</Link>
        <Link to="/shop" className="nav-link">Shop</Link>
      </div>
    </nav>
  );
};

export default Navbar;
