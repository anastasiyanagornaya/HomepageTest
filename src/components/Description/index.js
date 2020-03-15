import React from "react";
import DescriptionItem from "../DescriptionItem";

import "./style.scss";

const descItems = [
  {
    id: 1,
    className: "fa fa-desktop",
    title: "Responsive Layout",
    description:
      "Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize browser to view."
  },
  {
    id: 2,
    className: "fa fa-eye",
    title: "Retina Ready Graphics",
    description:
      "Looks beautiful & ultra-sharp on Retina Screen Displays. Retina Icons, Fonts & all others graphics are optimized."
  },
  {
    id: 3,
    className: "fa fa-flask",
    title: "Powerful Performance",
    description:
      "Canvas includes tons of optimized code that are completely customizable and deliver unmatched fast performance."
  },
  {
    id: 4,
    className: "fa fa-check",
    title: "12+ Header designs",
    description:
      "We have included 12+ Header + Menu Designs for your convenience so that you can match your style."
  },
  {
    id: 5,
    className: "fa fa-thumbs-up",
    title: "Awesome Mega Menu",
    description:
      "Completely Customizable 2 Columns, 3 Columns, 4 Columns & 5 Columns Mega Menus are available with Canvas."
  },
  {
    id: 6,
    className: "fa fa-magnet",
    title: "Attractive sticky menu",
    description:
      "Smooth & Stylish Sticky Menu is what will make your Website differentiate with others."
  }
];

const Description = () => {
  return (
    <div className="description">
      <div className="container">
        <ul className="description-items">
          {descItems.map(item => (
            <li key={item.id} className="description-item">
              <DescriptionItem
                className={item.className}
                title={item.title}
                description={item.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Description;
