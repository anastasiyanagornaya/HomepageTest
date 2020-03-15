import React from "react";
import AppleIcon from "@material-ui/icons/Apple";

import "./style.scss";
import phone from "../../img/slider/slider-iphone.png";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider-container">
        <div className="slider-image">
          <img src={phone} alt="IPhone" />
        </div>
        <div className="slider-info">
          <div className="slider-info-title">
            <h1>
              The new way to create awesome websites. Try using{" "}
              <strong>Canvas</strong> Template.
            </h1>
          </div>
          <div className="slider-info-button">
            <a href="#" className="slider-info-button-link">
              <div className="slider-info-button-link-box">
                <i class="fa fa-apple"></i>
                <div className="slider-info-button-link-text">
                  Start your free trial{" "}
                  <span>30-Days & No Credit card Required</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
