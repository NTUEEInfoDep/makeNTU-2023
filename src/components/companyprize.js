import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
function WidthCalculator(ratio) {
  return Math.floor(100 * ratio).toString() + "px";
}

const CompanyPrize = ({ prize }) => (
  <div className="prize" style={{ paddingTop: "15px" }}>
    <div className="prize__content">
      <Img
        fluid={prize.image.fluid}
        className="prize__image2"
        style={{
          position: "absolute",
          height: "100px",
          width: WidthCalculator(prize.image.fluid.aspectRatio),
        }}
      />

      <strong
        className="prize__name"
        style={{
          paddingTop: "100px",
          fontSize: "200%",
          paddingBottom: "25px",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      >
        {prize.title}
      </strong>
      {prize.description.content.map((item) => (
        <p
          className="prize__company text-secondary mb-4"
          style={{
            fontSize: "120%",
            marginRight: "10%",
            marginLeft: "10%",
          }}
        >
          {item.content[0].value}
        </p>
      ))}

      <div>
        <table className="prize__table">
          <tbody>
            {prize.scoring.scoring.map((item) => (
              <tr>
                <th>{item.name}:&nbsp;&nbsp;</th>
                <th>{item.percentage}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <a href={prize.link}>
        <button className="btn btn--primary mt-4 mb-0">More...</button>
      </a>
    </div>
  </div>
);
//<i className="testimonial__comment text-sm">{testimonial.description}</i>
CompanyPrize.propTypes = {
  prize: PropTypes.object.isRequired,
};

export default CompanyPrize;
