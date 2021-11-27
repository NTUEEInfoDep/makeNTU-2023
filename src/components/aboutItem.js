import React from "react";
import Img from "gatsby-image";

const AboutItem = ({ feature }) => (
  <li className="mb-6">
    <div className="item_section">
      <div className="item">
        <i className="item__icon material-icons text-primary">{feature.icon}</i>
        <div className="item__content">
          <h3 className="item__title font-semibold mt-0">{feature.title}</h3>
          <p className="item__text">{feature.description.description}</p>
        </div>
      </div>
      <div className="item__image mx-auto">
        <Img fluid={feature.image.fluid} />
      </div>
    </div>
  </li>
);

export default AboutItem;
