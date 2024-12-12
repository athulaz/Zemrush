
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie } from "@fortawesome/free-solid-svg-icons"; // Replace this with any icon you prefer
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <FontAwesomeIcon icon={faChartPie} className="logo-icon" />
          <span className="logo-text">SEMRUSH</span>
        </div>

        {/* Navigation Links */}
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
          <a href="#company">Company</a>
          <a href="#app-center">
            App Center <span className="new-badge">new</span>
          </a>
          <a href="#enterprise">Enterprise</a>
        </nav>

        {/* Language Selector and Buttons */}
        <div className="actions">
          <select className="language-selector" defaultValue="EN">
            <option value="EN">EN</option>
            <option value="ES">ES</option>
          </select>
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
