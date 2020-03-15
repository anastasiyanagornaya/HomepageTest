import React from "react";
import Button from "../Button";

import "./style.scss";
import iphone from "../../img/responsiveness/iphone-solid.png";

const Responsiveness = () => {
  return (
    <div className="responsiveness">
      <div className="container">
        <div className="responsiveness-box">
          <div className="responsiveness-image">
            <img src={iphone} />
          </div>
          <div className="responsiveness-description">
            <div className="responsiveness-description-title">
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
            <Button title={"View gallery"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responsiveness;
