import React, { useRef } from "react";
import AppleIcon from "@material-ui/icons/Apple";

import "./style.scss";
import phone from "../../img/slider/slider-iphone.png";

const Slider = () => {
  let slider = useRef(null);
  let sliderContainer = useRef(null);
  
  const onScrollHandler = (event) => {
    const { top } = slider.current.getBoundingClientRect();
    
    sliderContainer.current.style.transform = `translateY(${Math.abs(top) * 0.1}px)`
  }

  document.addEventListener('scroll', onScrollHandler);

  return (
    <div className="slider" ref={slider}>
      <div className="slider-container" ref={sliderContainer}>
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
