import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Glider from "glider-js";
import Prize from "components/prize";
import CompanyPrize from "components/companyprize";

const Prizes = ({ contentModuleId }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPrizes {
        edges {
          node {
            image {
              fluid(quality: 100) {
                src
                aspectRatio
              }
            }
            title
            scoring {
              scoring {
                name
                percentage
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
  const content = data.allContentfulPrizes.edges;
  const content2 = data.allContentfulCompanyPrizes.edges;
  // console.log(content);
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

  useEffect(() => {
    initSlider();
  });

  return (
    <section id="prizes" className="prizes container section mx-auto">
      <div
        className="w-full md:w-1/2 pl-0 text-center md:text-left"
        style={{ marginRight: "10px" }}
      >
        <h2
          className="w-full font-bold leading-none section__title mb-16"
          data-sal="fade"
          data-sal-easing="ease-in-cubic"
          style={{ textAlign: "center" }}
        >
          大會獎
        </h2>
        <div className="w-full md:pt-0">
          {content.length > 0 && (
            <div
              className="prize__slider"
              data-sal="fade"
              data-sal-easing="ease-in-cubic"
            >
              <div className="glider1">
                {content.map((prize) => (
                  <Prize prize={prize.node} key={prize.node.id} />
                ))}
              </div>
              <div style={{ width: "80%", transform: "translateX(12%)" }}>
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
                  style={{ position: "absolute", right: "0px" }}
                >
                  keyboard_arrow_right
                </button>
              </div>
              <div
                className="glider1__dots"
                style={{ marginBottom: "30px" }}
              ></div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full md:w-1/2 pl-0 text-center md:text-left">
        <h2
          className="w-full font-bold leading-none section__title mb-16"
          data-sal="fade"
          data-sal-easing="ease-in-cubic"
          style={{ textAlign: "center" }}
        >
          企業獎
        </h2>
        <div className="w-full md:pt-0">
          {content2.length > 0 && (
            <div
              className="prize__slider"
              data-sal="fade"
              data-sal-easing="ease-in-cubic"
            >
              <div className="glider2">
                {content2.map((prize) => (
                  <CompanyPrize prize={prize.node} key={prize.node.id} />
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

Prizes.propTypes = {
  contentModuleId: PropTypes.string.isRequired,
};

export default Prizes;
