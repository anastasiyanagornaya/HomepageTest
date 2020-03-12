import React from "react";
import AppleIcon from "@material-ui/icons/Apple";

import "./Slider.css";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider-container">
        <div className="slider-phone">
          <img src="../../../img/slider/slider-iphone.png" alt="IPhone" />
        </div>
        <div className="slider-info">
          <div className="slider-info-title">
            <h1>
              The new way to create awesome websites. Try using
              <strong>Canvas</strong> Template.
            </h1>
          </div>
          <div className="slider-info-start-button">
            <a href="#" className="start-button-link">
              <AppleIcon />
              <div className="button-text">
                Start your free trial{" "}
                <span>30-Days & No Credit card Required</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
