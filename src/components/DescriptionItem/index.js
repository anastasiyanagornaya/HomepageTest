import React from "react";

import "./style.scss";

const DescriptionItem = ({ className, title, description }) => {
  return (
    <>
      <div className="description-item-box">
        <div className="description-item-box-icon">
          <a href="#" className="description-item-box-icon-link">
            <i className={className}></i>
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
