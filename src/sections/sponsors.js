import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import SponsorTable from "components/sponsorItem";

const Sponsors = ({ contentModuleId }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLayoutSponsors {
        edges {
          node {
            id
            subtitle1
            imageOrganizers {
              fluid(quality: 100, maxWidth: 208, maxHeight: 146) {
                ...GatsbyContentfulFluid
              }
              description
            }
            subtitle2
            imageCoOrganizers {
              fluid {
                ...GatsbyContentfulFluid
              }
              description
            }
            subtitle3
            image_sponsors {
              fluid {
                ...GatsbyContentfulFluid
              }
              description
            }
          }
        }
      }
    }
  `);

  const content = data.allContentfulLayoutSponsors.edges.find(
    (edge) => edge.node.id === contentModuleId
  );
  console.log(content.node.image_sponsors);
  return (
    <section id="ocs" className="section mx-auto">
      <div className="container mx-auto">
        <div className="mx-auto">
          <h2
            className="section__title text-center mb-16"
            data-sal="fade"
            data-sal-easing="ease-in-cubic"
          >
            {content.node.subtitle1}
          </h2>
        </div>
        <div
          className="sponsors__image sponsors__image-wrap mx-auto"
          data-sal="fade"
          data-sal-delay="100"
          data-sal-easing="ease-in-cubic"
        >
          <SponsorTable feature={content.node.imageOrganizers} />
        </div>
        <br />
        <div className="mx-auto">
          <h2
            className="section__title text-center mb-16"
            data-sal="fade"
            data-sal-delay="200"
            data-sal-easing="ease-in-cubic"
          >
            {content.node.subtitle2}
          </h2>
        </div>
        <div
          className="sponsors__image mx-auto"
          data-sal="fade"
          data-sal-delay="300"
          data-sal-easing="ease-in-cubic"
        >
          <SponsorTable feature={content.node.imageCoOrganizers} />
        </div>
        <br />
        <div id="sponsors" className="mx-auto">
          <h2
            className="section__title text-center mb-16"
            data-sal="fade"
            data-sal-delay="400"
            data-sal-easing="ease-in-cubic"
          >
            {content.node.subtitle3}
          </h2>
        </div>
        <div
          className="sponsors__image mx-auto"
          data-sal="fade"
          data-sal-delay="500"
          data-sal-easing="ease-in-cubic"
        >
          <SponsorTable feature={content.node.image_sponsors} />
        </div>
      </div>
    </section>
  );
};

Sponsors.propTypes = {
  contentModuleId: PropTypes.string.isRequired,
};

export default Sponsors;
