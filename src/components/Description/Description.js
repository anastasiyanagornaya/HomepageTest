import React from "react";

import "./Description.css";

const Description = () => {
  return (
    <div className="section-description">
      <div className="description-container">
        <ul className="description-items">
          {[
            {
              id: 1,
              img: "../../img/advantages/s1.png",
              title: "Responsive Layout",
              description:
                "Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize browser to view."
            },
            {
              id: 2,
              img: "../../img/advantages/s4.png",
              title: "Retina Ready Graphics",
              description:
                "Looks beautiful & ultra-sharp on Retina Screen Displays. Retina Icons, Fonts & all others graphics are optimized."
            },
            {
              id: 3,
              img: "../../img/advantages/s5.png",
              title: "Powerful Performance",
              description:
                "Canvas includes tons of optimized code that are completely customizable and deliver unmatched fast performance."
            },
            {
              id: 4,
              img: "../../img/advantages/s5.png",
              title: "12+ Header designs",
              description:
                "We have included 12+ Header + Menu Designs for your convenience so that you can match your style."
            },
            {
              id: 5,
              img: "../../img/advantages/s5.png",
              title: "Awesome Mega Menu",
              description:
                "Completely Customizable 2 Columns, 3 Columns, 4 Columns & 5 Columns Mega Menus are available with Canvas."
            },
            {
              id: 6,
              img: "../../img/advantages/s5.png",
              title: "Attractive sticky menu",
              description:
                "Smooth & Stylish Sticky Menu is what will make your Website differentiate with others."
            }
          ].map(item => (
            <li key={item.id} className="description-item">
              <div className="description-item-box">
                <div className="item-box-icon">
                  <a href="#" className="item-icon-link">
                    <img src={item.img} />
                  </a>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Description;
