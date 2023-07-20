import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your custom CSS file for Navbar styling
//import logo from './your-logo.png'; // Import your logo image

const Navbar: React.FC = () => {
  return (
    <header>
      {/* First Layer */}
      <div className="first-layer">
        <div className="first-layer__logo">
          <img src={""} alt="Logo" className="navbar__logo" />
        </div>
        <div className="first-layer__name">
        <p>Rabin !</p>
        </div>
        <div className="first-layer__upload">
          <button className="navbar__upload-btn">Upload Photo</button>
        </div>
      </div>

      {/* Second Layer - Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="nav-link">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
