import React from 'react';
import { Link } from 'react-router-dom';
import "../Navbar/navbar.scss"; // Import the corresponding CSS styles
import LogoVideo from '../../assets/images/Logo.mp4'; // Import the logo video

// Define the Navbar functional component
const Navbar = () => {
    return (
        <nav className="navbar"> {/* Create a navigation bar with a "navbar" class */}
            <div className="logo"> {/* Create a logo container with a "logo" class */}
                <video autoPlay muted width={"200"} height={"200"}>
                    <source src={LogoVideo} type="video/mp4" /> {/* Embed the logo video */}
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="nav-links"> {/* Create a navigation links container with a "nav-links" class */}
                <Link to="/home" className="nav-link">Home</Link> {/* Create a link to the Home page */}
                <Link to="/about" className="nav-link">About</Link> {/* Create a link to the About page */}
                <Link to="/video" className="nav-link">Videos</Link> {/* Create a link to the Videos page */}
                <Link to="/shop" className="nav-link">Shop</Link> {/* Create a link to the Shop page */}
            </div>
        </nav>
    );
};

export default Navbar; // Export the Navbar component for use in other parts of your application
