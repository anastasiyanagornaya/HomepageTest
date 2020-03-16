import React from "react";

import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container flex">
        <div className="footer-copirights">
          Copyrights © 2014 All Rights Reserved by Canvas Inc.
          <br />
          <div className="footer-copyrights-links">
            <a href="#">Terms of Use</a> / <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div className="footer-contacts">
          <div className="footer-contacts-social-networks">
            <a href="#" class="footer-contacts-social-networks-link facebook">
              <i class="fa fa-facebook-f first"></i>
              <i class="fa fa-facebook-f second"></i>
            </a>
            <a href="#" class="footer-contacts-social-networks-link twitter">
              <i class="fa fa-twitter first"></i>
              <i class="fa fa-twitter second"></i>
            </a>
            <a
              href="#"
              class="footer-contacts-social-networks-link google-plus"
            >
              <i class="fa fa-google first"></i>
              <i class="fa fa-google second"></i>
            </a>
            <a href="#" class="footer-contacts-social-networks-link pinterest">
              <i class="fa fa-pinterest first"></i>
              <i class="fa fa-pinterest second"></i>
            </a>
            <a href="#" class="footer-contacts-social-networks-link vimeo">
              <i class="fa fa-vimeo first"></i>
              <i class="fa fa-vimeo second"></i>
            </a>
            <a href="#" class="footer-contacts-social-networks-link github">
              <i class="fa fa-github first"></i>
              <i class="fa fa-github second"></i>
            </a>
            <a href="#" class="footer-contacts-social-networks-link yahoo">
              <i class="fa fa-yahoo first"></i>
              <i class="fa fa-yahoo second"></i>
            </a>
            <a href="#" class="footer-contacts-social-networks-link linkedin">
              <i class="fa fa-linkedin first"></i>
              <i class="fa fa-linkedin second"></i>
            </a>
          </div>
          <div classname="footer-contacts-info">
            <i class="fa fa-envelope"></i>
            info@canvas.com<span className="middot">.</span>
            <i class="fa fa-headphones"></i>+91-11-6541-6369
            <span className="middot">.</span>
            <i class="fa fa-skype"></i>CanvasOnSkype
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
