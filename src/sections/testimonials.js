import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Glider from "glider-js";
import Testimonial from "components/testimonial";

const Testimonials = ({ contentModuleId }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPrizes {
        edges {
          node {
            image {
              fluid(quality: 100) {
                src
              }
            }
            title
            scoring {
              internal {
                content
              }
            }
            description
          }
        }
      }
    }
  `);
  // query {
  //     allContentfulLayoutTestimonials {
  //         edges {
  //             node {
  //                 id
  //                 heading
  //                 description {
  //                     description
  //                 }
  //                 testimonials {
  //                     id
  //                     name
  //                     company
  //                     comment {
  //                         comment
  //                     }
  //                     image{
  //                         fluid (quality: 100) {
  //                             ...GatsbyContentfulFluid
  //                         }
  //                     }
  //                 }
  //             }
  //         }
  //     }
  // }

  //   const content = data.allContentfulLayoutTestimonials.edges.find(
  //     (edge) => edge.node.id === contentModuleId
  //   );
  const content = data.allContentfulPrizes.edges;
  // console.log(content);
  // console.log(content[0].node.scoring.internal.content);
  const initSlider = () => {
    new Glider(document.querySelector(".glider"), {
      slidesToShow: 1,
      dots: ".glider__dots",
      draggable: true,
      arrows: {
        prev: ".glider-prev",
        next: ".glider-next",
      },
    });
  };

  // <p
  //   className="w-full md:w-3/4"
  //   data-sal="fade"
  //   data-sal-easing="ease-in-cubic"
  // >
  //   {content[0].node.description}
  // </p>
  useEffect(() => {
    initSlider();
  });

  return (
    <section
      id="testimonials"
      className="testimonials container section mx-auto"
    >
      <div
        className="w-full md:w-1/2 pl-0 md:pl-16 text-center md:text-left"
        style={{ marginRight: "10px" }}
      >
        <h1
          className="w-full md:w-3/4 font-bold text-5xl leading-none mb-6"
          data-sal="fade"
          data-sal-easing="ease-in-cubic"
        >
          大會獎
        </h1>
        <p>maybe put some images here...</p>
        <div className="w-full pt-12 md:pt-0">
          {content.length > 0 && (
            <div
              className="testimonial__slider"
              data-sal="fade"
              data-sal-easing="ease-in-cubic"
            >
              <div className="glider">
                {content.map((testimonial) => (
                  <Testimonial
                    testimonial={testimonial.node}
                    key={testimonial.node.id}
                  />
                ))}
              </div>
              <button className="glider-prev material-icons">
                keyboard_arrow_left
              </button>
              <button className="glider-next material-icons">
                keyboard_arrow_right
              </button>
              <div className="glider__dots"></div>
            </div>
          )}
        </div>
      </div>
      <div
        className="w-full md:w-1/2 pl-0 md:pl-16 text-center md:text-left"
        style={{ marginLeft: "10px" }}
      >
        <h1
          className="w-full md:w-3/4 font-bold text-5xl leading-none mb-6"
          data-sal="fade"
          data-sal-easing="ease-in-cubic"
        >
          企業獎
        </h1>
        <p>maybe put some images here...</p>
        <div className="w-full pt-12 md:pt-0">
          {content.length > 0 && (
            <div
              className="testimonial__slider"
              data-sal="fade"
              data-sal-easing="ease-in-cubic"
            >
              <div className="glider">
                {content.map((testimonial) => (
                  <Testimonial
                    testimonial={testimonial.node}
                    key={testimonial.node.id}
                  />
                ))}
              </div>
              <button className="glider-prev material-icons">
                keyboard_arrow_left
              </button>
              <button className="glider-next material-icons">
                keyboard_arrow_right
              </button>
              <div className="glider__dots"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  contentModuleId: PropTypes.string.isRequired,
};

export default Testimonials;
