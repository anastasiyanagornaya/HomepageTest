import React from "react";

import "./style.scss";
// import * as goTop from "../../helpers/goTop"

const GoTop = () => {
  return (
    <div id="goTop" className="icon-up" onClick={()=>window.scrollTo(0, 0)}>
        <i class="fa fa-chevron-up"></i>
    </div>
  );
};

export default GoTop;
