import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Map from "components/map";

const Location = ({ contentModuleId }) => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulLayoutLocation {
                edges {
                    node {
                        id
                        heading
                        description
                        location {
                            src
                            width
                            height
                            frameborder
                            allowfullscreen
                            tableindex
                        }
                    }
                }
            }
        }
    `);

    const content = data.allContentfulLayoutLocation.edges.find((edge) => edge.node.id === contentModuleId);

    return (
        <section id="location" className="section mx-auto">
            <div className="container mx-auto">
                <div className="mx-auto">
                    <h2 className="text-center section__title mb-16">{content.node.heading}</h2>
                    <h3 className="mx-auto text-center location__description">{content.node.description}</h3>
                </div>
                <div>
                    <div className="iframe-rwd mx-auto">
                        <Map feature={content.node.location} />
                    </div>
                </div>
            </div>
        </section>
    );
};

Location.propTypes = {
    contentModuleId: PropTypes.string.isRequired,
};

export default Location;
