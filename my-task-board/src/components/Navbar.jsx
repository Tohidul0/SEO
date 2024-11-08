import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-logo">
          <span>LightShot</span>
        </a>
      </div>
      <div className="navbar-right">
        <div className="navbar-language">
          <select>
            <option value="en">English</option>
            <option value="bn">Bangla</option>
            
          </select>
        </div>
        <a href="/sign-in" className="navbar-signin">
          Sign in
        </a>
        <a href="/download" className="navbar-download-btn">
          Download Lightshot for free
        </a>
      </div>
    </nav>
  );
};

export default Navbar;