import React from "react";

import "./style.scss";

const AdvantagesItem = ({ img, title, description }) => {
  return (
    <>
      <a href="#" className="advantages-item-link">
        <img src={img} alt="adnantage" />
      </a>
      <h4>{title}</h4>
      <p>{description}</p>
    </>
  );
};

export default AdvantagesItem;
