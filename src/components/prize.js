import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const Prize = ({ prize }) => (
  <div className="prize" style={{ paddingTop: "15px", marginTop: "0px" }}>
    <div className="prize__content">
      <Img
        fluid={prize.image.fluid}
        className="prize__image"
        style={{ position: "absolute" }}
      />
      <strong
        className="prize__name"
        style={{
          paddingTop: "200px",
          fontSize: "150%",
          paddingBottom: "10px",
        }}
      >
        {prize.title}
      </strong>
      <p
        className="prize__company text-secondary mb-4"
        style={{ paddingBottom: "10px", paddingTop: "10px", fontSize: "100%" }}
      >
        {prize.description}
      </p>

      <div>
        <table className="prize__table">
          <tbody>
            {prize.scoring.scoring.map((item) => (
              <tr>
                <th style={{ textAlign: "right" }}>{item.name}:&nbsp;&nbsp;</th>
                <th style={{ textAlign: "left" }}>{item.percentage}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
//<i className="testimonial__comment text-sm">{testimonial.description}</i>
Prize.propTypes = {
  prize: PropTypes.object.isRequired,
};

export default Prize;
