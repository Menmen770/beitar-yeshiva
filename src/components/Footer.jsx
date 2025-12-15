// src/components/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      {/* Upper bar that mirrors navbar layout */}
      <div className="footer-inner">
        {/* Right: logo same position/size as navbar */}
        <div className="footer-logo-area">
          <Link to="/">
            <img src={logo} alt="לוגו הישיבה" className="logo-img" />
          </Link>
          {/* Small inline contact to the left of logo */}
          <div className="footer-mini-contact">
            <a href="tel:+97221234567" className="mini-item">
              📞 02-5800083
            </a>
            <a href="mailto:info@or-yisrael.org.il" className="mini-item">
              ✉️ totlb7@gmail.com
            </a>
            <span className="mini-item">📍 רח' כף החיים 7, ביתר עילית</span>
          </div>
        </div>

        {/* Left: navigation like navbar */}
        <div className="footer-links">
          <Link to="/" className="nav-link">
            דף הבית
          </Link>
          <Link to="/about" className="nav-link">
            אודות
          </Link>
          <Link to="/register" className="nav-link">
            רישום
          </Link>
          <Link to="/requests" className="nav-link">
            בקשת אישור
          </Link>
          <Link to="/reports" className="nav-link">
            דוח התקשרויות
          </Link>
          <Link to="/contact" className="nav-link">
            צור קשר
          </Link>

          {/* Copyright בצד שמאל */}
          <span className="footer-copyright">© 2025 כל הזכויות שמורות</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
