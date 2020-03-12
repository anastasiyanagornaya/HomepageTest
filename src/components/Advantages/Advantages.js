import React from "react";

import "./Advantages.css";

const Advantages = () => {
  return (
    <div className="advantages-container">
      <div className="advantages-box">
        <ul className="advantages-items">
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
            }
          ].map(item => (
            <li key={item.id} className="advantages-item">
              <a href="#" className="advantages-item-link">
                <img src={item.img} />
              </a>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Advantages;
