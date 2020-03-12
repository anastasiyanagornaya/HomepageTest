import React from "react";

import "./Responsiveness.css";

const Responsiveness = () => {
  return (
    <div className="responsiveness-section">
      <div className="responsiveness-container">
        <div className="container">
          <div className="responsiveness-image">
            <img src="/../../img/responsiveness/iphone-solid.png" />
          </div>
          <div className="responsiveness-description">
            <div className="description-title">
              <h2>Typically responsive</h2>
              <span>Our App scales beautifully to different Devices.</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
              cumque, perferendis accusamus porro illo exercitationem molestias,
              inventore obcaecati ut omnis voluptatibus ratione odio amet magnam
              quidem tempore necessitatibus quaerat, voluptates excepturi
              voluptatem, veritatis qui temporibus.
            </p>
            <a href="#" className="button">
              View Gallery
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responsiveness;
