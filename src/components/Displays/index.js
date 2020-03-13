import React from "react";

import "./style.scss";
import chrome from "../../img/displays/chrome.png";
import ipad3 from "../../img/displays/ipad3.png";

const Displays = () => {
  return (
    <div className="displays">
      <div className="displays-container">
        <div className="displays-title">
          <h2>Looks beautiful on all displays.</h2>
        </div>
        <div className="displays-animated-block">
          <img src={chrome} />
          <img src={ipad3} />
        </div>
      </div>
    </div>
  );
};

export default Displays;
