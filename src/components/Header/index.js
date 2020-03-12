import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import "./style.scss";

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
      <div className="header-logo">
        <a href="#">
          <img src="../../img/header/Capture-logo.jpg" alt="Logo" />
        </a>
      </div>
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
        <div className="header-nav-icons">
          <a href="#" className="header-nav-icons-item">
            <SearchIcon />
          </a>
          <a href="#" className="header-nav-icons-item shopping">
            <ShoppingCartIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
