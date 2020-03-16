import React from "react";

import "./style.scss";
import footerLogo from "../../img/information/footer-logo.png";

const blogrollItems = [
  "Documentation",
  "Feedback",
  "Plugins",
  "Support Forums",
  "Themes",
  "WordPress Blog",
  "WordPress Planet"
];

const Posts = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur",
    date: "10th July 2014"
  },
  {
    id: 1,
    text: "Elit Assumenda vel amet dolorum quasi",
    date: "10th July 2014"
  },
  {
    id: 1,
    text: "Debitis nihil placeat, illum est nisi",
    date: "10th July 2014"
  }
];

const Information = () => {
  return (
    <div className="information">
      <div className="container">
        <div className="information-summary">
          <div className="information-summary-canvas">
            <div className="information-summary-canvas-logo">
              <img src={footerLogo} />
            </div>
            <p>We believe in Simple, Creative & Flexible Design Standards.</p>
            <div className="information-summary-canvas-headquarters">
              <address>
                <strong>Headquarters:</strong>
                <br />
                795 Folsom Ave, Suite 600
                <br />
                San Francisco, CA 94107
                <br />
              </address>
              <abbr title="Phone Number">
                <strong>Phone:</strong>
              </abbr>
              (91) 8547 632521
              <br />
              <abbr title="Fax">
                <strong>Phone:</strong>
              </abbr>
              (91) 11 4752 1433
              <br />
              <abbr title="Email Adress">
                <strong>Phone:</strong>
              </abbr>
              info@canvas.com
            </div>
          </div>
          <div className="information-summary-blogroll">
            <h4>Blogroll</h4>
            <ul className="information-summary-blogroll-items">
              {blogrollItems.map((item, index) => (
                <li key={index} className="information-summary-blogroll-item">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="information-summary-posts">
            <h4>Recent posts</h4>
            <ul className="information-summary-posts-items">
              {Posts.map(item => (
                <li key={item.id} className="information-summary-posts-item">
                  <h4>
                    <a href="#">{item.text}</a>
                  </h4>
                  <div>{item.date}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="information-contacts">
            <div className="information-contacts-statistics">
              <div className="information-contacts-statistics-downloads">
                <div className="counter">15,065,421</div>
                <h5>Total downloads</h5>
              </div>
              <div className="information-contacts-statistics-clients">
                <div className="counter">18,465</div>
                <h5>Clients</h5>
              </div>
            </div>
            <div className="information-contacts-subscribe">
              <h5>
                Subscribe to Our Newsletter to get Important News, Amazing
                Offers & Inside Scoops:
              </h5>
              <form className="information-form-subscribe">
                <div className="information-form-subscribe-box">
                  <div className="information-form-subscribe-icon">
                    <div className="information-form-subscribe-icon-box">
                      <i class="fa fa-paper-plane"></i>
                    </div>
                  </div>
                  <input type="email" placeholder="Enter your Email" />
                  <div className="information-form-subscribe-button">
                    Subscribe
                  </div>
                </div>
              </form>
            </div>
            <div className="information-contacts-networks">
              <div className="information-contacts-networks-box">
                <a href="#" class="information-contacts-networks-link blue">
                  <i class="fa fa-facebook-f first"></i>
                  <i class="fa fa-facebook-f second"></i>
                </a>
                <a href="#" className="information-contacts-networks-text">
                  <small>
                    <strong>Like us</strong>
                    <br />
                    on Facebook
                  </small>
                </a>
              </div>
              <div className="information-contacts-networks-box">
                <a href="#" class="information-contacts-networks-link orange">
                  <i class="fa fa-rss first"></i>
                  <i class="fa fa-rss second"></i>
                </a>
                <a href="#" className="information-contacts-networks-text">
                  <small>
                    <strong>Like us</strong>
                    <br />
                    on Facebook
                  </small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
