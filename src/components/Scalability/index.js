import React from "react";
import Button from "../Button";

import "./style.scss";

const Scalability = () => {
  return (
    <div className="scalability">
      <div className="scalability-container">
        <div className="scalability-box">
          <div className="scalability-description">
            <div className="scalability-description-title">
              <h2>Awesome scalable apps</h2>
              <span>Our Template acts & behaves truly as a Canvas.</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              maiores pariatur voluptatem placeat laborum iste accusamus nam
              unde, iure id.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
              cumque, perferendis accusamus porro illo exercitationem molestias,
              inventore obcaecati ut omnis voluptatibus ratione odio amet magnam
              quidem tempore necessitatibus quaerat, voluptates excepturi
              voluptatem, veritatis qui temporibus.
            </p>
            <Button title={"Start Trial"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scalability;
