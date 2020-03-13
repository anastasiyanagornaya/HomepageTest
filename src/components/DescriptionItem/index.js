import React from "react";

import "./style.scss";

const DescriptionItem = ({ img, title, description }) => {
  return (
    <>
      <div className="description-item-box">
        <div className="description-item-box-icon">
          <a href="#" className="description-item-box-icon-link">
            <img src={img} />
          </a>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {/* <Displays /> */}
    </>
  );
};

export default DescriptionItem;
