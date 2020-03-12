import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="#">
          <img src="../../img/header/Capture_logo.JPG" alt="Capture logo" />
        </a>
      </div>
      <div className="nav">
        <ul className="nav-items">
          {[
            "Home",
            "Features",
            "Pages",
            "Portfolio",
            "Blog",
            "Shop",
            "Shortcodes"
          ].map((text, index) => (
            <li key={index} className="nav-item">
              <a href="#" className="nav-item-link">
                {text}
              </a>
            </li>
          ))}
        </ul>
        <div className="top-nav-icons">
          <div className="top-search">
            <a href="#" className="nav-icon-link">
              <SearchIcon />
            </a>
          </div>
          <div className="top-cart">
            <a href="#" className="nav-icon-link">
              <ShoppingCartIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
