import React from "react";
import AdvantagesItem from "../AdvantagesItem";

import "./style.scss";
import s1 from "../../img/advantages/s1.png";
import s4 from "../../img/advantages/s4.png";
import s5 from "../../img/advantages/s5.png";

const advantageItems = [
  {
    id: 1,
    img: s1,
    title: "Responsive Layout",
    description:
      "Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize browser to view."
  },
  {
    id: 2,
    img: s4,
    title: "Retina Ready Graphics",
    description:
      "Looks beautiful & ultra-sharp on Retina Screen Displays. Retina Icons, Fonts & all others graphics are optimized."
  },
  {
    id: 3,
    img: s5,
    title: "Powerful Performance",
    description:
      "Canvas includes tons of optimized code that are completely customizable and deliver unmatched fast performance."
  }
];

const Advantages = () => {
  return (
    <div className="advantages">
      <div className="container">
        <div className="advantages-box">
          <ul className="advantages-items">
            {advantageItems.map(item => (
              <li key={item.id} className="advantages-item">
                <AdvantagesItem
                  img={item.img}
                  title={item.title}
                  description={item.description}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
