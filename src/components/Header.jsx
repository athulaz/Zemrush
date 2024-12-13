import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie } from "@fortawesome/free-solid-svg-icons"; 
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <FontAwesomeIcon icon={faChartPie} className="logo-icon" />
          <span className="logo-text">ZEMRUSH</span>
        </div>

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

        <div className="actions">
          <select className="language-selector" defaultValue="EN">
            <option value="EN">EN</option>
            <option value="ES">ES</option>
          </select>
          <button className="login-btn">Log In</button>
          <button className="btn btn-warning">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
