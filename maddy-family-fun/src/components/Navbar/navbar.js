import React from 'react';
import { Link } from 'react-router-dom';
import "../Navbar/navbar.scss";
import LogoVideo from '../../assets/images/Logo.mp4';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <video autoPlay muted width={"200"} height={"200"}>
                    <source src={LogoVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="nav-links">
                <Link to="/home" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/video" className="nav-link">Videos</Link>
                <Link to="/shop" className="nav-link">Shop</Link>
            </div>
        </nav>
    );
};

export default Navbar;
