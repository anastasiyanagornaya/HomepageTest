import React from "react";

import "./style.scss";

const Button = ({ title }) => {
  return (
    <>
      <a href="#" className="button">
        {title}
      </a>
    </>
  );
};

export default Button;
