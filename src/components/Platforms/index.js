import React from "react";

import "./style.scss";
// import logo from "../../img/header/logo.png";

const Platforms = () => {
  return (
    <div className="platforms">
      <div className="platforms-container">
        <div className="platforms-info">
          <div className="platforms-info-title">
            <h3>Available on all major platforms.</h3>
            <span>We have made our App available on all Major Platforms</span>
          </div>
          <p className="platforms-info-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo animi
            ab dolorem deleniti, incidunt, recusandae tenetur eius aut similique
            delectus nisi labore odit temporibus reprehenderit eum iure natus
            voluptatem commodi? Quam ea, placeat quia et dignissimos laboriosam
            unde earum repudiandae?
          </p>
          <div className="platforms-icons"></div>
        </div>
        <div className="platforms-subscribe">
          <h3>
            SUBSCRIBE FOR MORE <span>UPDATES</span>.
          </h3>
        </div>
        <form>
          <input type="email" />
        </form>
      </div>
    </div>
  );
};

export default Platforms;
