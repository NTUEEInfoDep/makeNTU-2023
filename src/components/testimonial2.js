import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
function WidthCalculator(ratio) {
  return Math.floor(100 * ratio).toString() + "px";
}

const Testimonial2 = ({ testimonial }) => (
  <div className="testimonial">
    <div className="testimonial__content">
      <Img
        fluid={testimonial.image.fluid}
        className="testimonial__image2"
        style={{
          position: "absolute",
          height: "100px",
          width: WidthCalculator(testimonial.image.fluid.aspectRatio),
        }}
      />

      <strong
        className="testimonial__name"
        style={{ paddingTop: "125px", fontSize: "200%", paddingBottom: "10px" }}
      >
        {testimonial.title}
      </strong>
      {testimonial.description.content.map((item) => (
        <p
          className="testimonial__company text-secondary mb-4"
          style={{
            paddingBottom: "10px",
            paddingTop: "10px",
            fontSize: "120%",
          }}
        >
          {item.content[0].value}
        </p>
      ))}

      <div>
        <table className="testimonial__table">
          <tbody>
            {testimonial.scoring.scoring.map((item) => (
              <tr>
                <th>{item.name}:&nbsp;&nbsp;</th>
                <th>{item.percentage}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <a href={testimonial.link}>
        <button className="btn btn--primary mt-4 mb-0">More...</button>
      </a>
    </div>
  </div>
);
//<i className="testimonial__comment text-sm">{testimonial.description}</i>
Testimonial2.propTypes = {
  testimonial: PropTypes.object.isRequired,
};

export default Testimonial2;
