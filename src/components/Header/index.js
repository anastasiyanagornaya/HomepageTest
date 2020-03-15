import React from "react";

import "./style.scss";
import logo from "../../img/header/logo.png";

const navItems = [
  "Home",
  "Features",
  "Pages",
  "Portfolio",
  "Blog",
  "Shop",
  "Shortcodes"
];

const Header = () => {
  return (
    <div className="header">
      <div className="header-nav-trigger">
        <label for="menu-toggle">
          <i class="fa fa-bars"></i>
        </label>  
      </div>
      <div className="header-logo">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <input type="checkbox" id="menu-toggle" />
      <div className="header-nav">
        <ul className="header-nav-items">
          {navItems.map((text, index) => (
            <li key={index} className="header-nav-item">
              <a href="#" className="header-nav-item-link">
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="header-nav-icons">
          <a href="#" className="header-nav-icons-item">
            <i class="fa fa-search"></i>
          </a>
          <a href="#" className="header-nav-icons-item shopping">
            <i class="fa fa-shopping-cart"></i>
          </a>
        </div>      
    </div>
  );
};

export default Header;
