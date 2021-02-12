import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Glider from "glider-js";
import Testimonial from "components/testimonial";
import Testimonial2 from "components/testimonial2";

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
      allContentfulCompanyPrizes {
        edges {
          node {
            description {
              content {
                content {
                  value
                }
              }
            }
            link
            name
            scoring {
              scoring {
                name
                percentage
              }
            }
            title
            image {
              fluid(quality: 100) {
                src
                aspectRatio
              }
            }
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
  const content2 = data.allContentfulCompanyPrizes.edges;
  // console.log(content);
  // console.log(content2);
  // console.log(content[0].node.scoring.internal.content);
  const initSlider = () => {
    new Glider(document.querySelector(".glider1"), {
      slidesToShow: 1,
      dots: ".glider1__dots",
      draggable: true,
      arrows: {
        prev: ".glider1-prev",
        next: ".glider1-next",
      },
    });
    new Glider(document.querySelector(".glider2"), {
      slidesToShow: 1,
      dots: ".glider2__dots",
      draggable: true,
      arrows: {
        prev: ".glider2-prev",
        next: ".glider2-next",
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
        <div className="w-full pt-12 md:pt-0">
          {content.length > 0 && (
            <div
              className="testimonial__slider"
              data-sal="fade"
              data-sal-easing="ease-in-cubic"
            >
              <div className="glider1">
                {content.map((testimonial) => (
                  <Testimonial
                    testimonial={testimonial.node}
                    key={testimonial.node.id}
                  />
                ))}
              </div>
              <div
                style={{
                  width: "80%",
                  transform: "translateX(12%)",
                }}
              >
                <button
                  className="glider1-prev material-icons"
                  style={{
                    position: "absolute",
                    left: "0px",
                  }}
                >
                  keyboard_arrow_left
                </button>
                <button
                  className="glider1-next material-icons"
                  style={{
                    position: "absolute",
                    right: "0px",
                  }}
                >
                  keyboard_arrow_right
                </button>
              </div>
              <div
                className="glider1__dots"
                style={{ marginBottom: "15px" }}
              ></div>
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

        <div className="w-full pt-12 md:pt-0">
          {content2.length > 0 && (
            <div
              className="testimonial__slider"
              data-sal="fade"
              data-sal-easing="ease-in-cubic"
            >
              <div className="glider2">
                {content2.map((testimonial) => (
                  <Testimonial2
                    testimonial={testimonial.node}
                    key={testimonial.node.id}
                  />
                ))}
              </div>
              <div
                style={{
                  width: "80%",
                  transform: "translateX(12%)",
                }}
              >
                <button
                  className="glider2-prev material-icons"
                  style={{
                    position: "absolute",
                    left: "0px",
                  }}
                >
                  keyboard_arrow_left
                </button>
                <button
                  className="glider2-next material-icons"
                  style={{
                    position: "absolute",
                    right: "0px",
                  }}
                >
                  keyboard_arrow_right
                </button>
              </div>
              <div
                className="glider2__dots"
                style={{ marginBottom: "15px" }}
              ></div>
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
