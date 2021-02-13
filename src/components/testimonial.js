import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const Testimonial = ({ testimonial }) => (
  <div className="testimonial" style={{ paddingTop: "15px" }}>
    <div className="testimonial__content">
      <Img
        fluid={testimonial.image.fluid}
        className="testimonial__image"
        style={{ position: "absolute" }}
      />
      <strong
        className="testimonial__name"
        style={{ paddingTop: "200px", fontSize: "200%", paddingBottom: "10px" }}
      >
        {testimonial.title}
      </strong>
      <p
        className="testimonial__company text-secondary mb-4"
        style={{ paddingBottom: "10px", paddingTop: "10px", fontSize: "120%" }}
      >
        {testimonial.description}
      </p>

      <table className="testimonial__table">
        <tbody>
          <tr>
            <th>原型實作:&nbsp;&nbsp;</th>
            <th>{JSON.parse(testimonial.scoring.internal.content).原型實作}</th>
          </tr>
          <tr>
            <th>技術應用:&nbsp;&nbsp;</th>
            <th>{JSON.parse(testimonial.scoring.internal.content).技術應用}</th>
          </tr>
          <tr>
            <th>創意發想:&nbsp;&nbsp;</th>
            <th>{JSON.parse(testimonial.scoring.internal.content).創意發想}</th>
          </tr>
          <tr>
            <th>商業價值:&nbsp;&nbsp;</th>
            <th>{JSON.parse(testimonial.scoring.internal.content).商業價值}</th>
          </tr>
          <tr>
            <th>實用性:&nbsp;&nbsp;</th>
            <th>{JSON.parse(testimonial.scoring.internal.content).實用性}</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
//<i className="testimonial__comment text-sm">{testimonial.description}</i>
Testimonial.propTypes = {
  testimonial: PropTypes.object.isRequired,
};

export default Testimonial;
