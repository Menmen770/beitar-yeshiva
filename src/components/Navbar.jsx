import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* לוגו */}
        <div className="navbar-logo-area">
          <Link to="/">
            <img src={logo} alt="לוגו הישיבה" className="logo-img" />
          </Link>
        </div>
        {/* קישורים */}
        <div className="navbar-links">
          <Link to="/" className="nav-link">
            דף הבית
          </Link>
          <Link to="/about" className="nav-link">
            אודות
          </Link>
          <a
            href="https://forms.pgishonim.com/?h=6937fbfb779df&t=d28e0c3ec8bd364b269260a91d98601f"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            רישום
          </a>
          <Link to="/requests" className="nav-link">
            בקשת אישור
          </Link>
          <Link to="/reports" className="nav-link">
            דוח התקשרויות
          </Link>
          <Link to="/contact" className="nav-link">
            צור קשר
          </Link>
          <Link to="/donate" className="donate-button">
            תרומה
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
