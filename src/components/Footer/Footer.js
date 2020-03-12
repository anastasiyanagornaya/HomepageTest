import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-copirights">
          Copyrights © 2014 All Rights Reserved by Canvas Inc.
          <br />
          <div className="footer-copyrights-links">
            <a href="#" class>
              Terms of Use
            </a>{" "}
            /<a href="#">Privacy Policy</a>
          </div>
        </div>
        <div className="footer-contacts">
          <div className="social-networks">
            <a href="#" className="social-icon"></a>
            <a href="#" className="social-icon"></a>
            <a href="#" className="social-icon"></a>
            <a href="#" className="social-icon"></a>
            <a href="#" className="social-icon"></a>
            <a href="#" className="social-icon"></a>
          </div>
          <div classname="footer-contacts-info">
            info@canvas.com<span className="middot">.</span>+91-11-6541-6369
            <span className="middot">.</span>CanvasOnSkype
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
