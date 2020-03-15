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
          <img src={chrome} class="fadeInUp animated"  data-animate="fadeInUp" alt="Chrome" />
          <img src={ipad3} class="fadeInUp animated"  data-animate="fadeInUp" data-delay="300" alt="Ipad"/>
        </div>
      </div>
    </div>
  );
};

export default Displays;
