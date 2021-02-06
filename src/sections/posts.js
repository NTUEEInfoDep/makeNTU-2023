import React from "react";
import PropTypes from "prop-types";
import { graphql, Link, useStaticQuery } from "gatsby";
import PostPreview from "components/postPreview";
import "../assets/css/layouts/posts.css";

const Posts = ({ contentModuleId }) => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulLayoutPosts {
                edges {
                    node {
                        id
                        heading
                        description {
                            description
                        }
                        posts {
                            id
                            title
                            slug
                            publishDate(formatString: "MMMM Do, YYYY")
                            tags
                            heroImage {
                                fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
                                    ...GatsbyContentfulFluid_tracedSVG
                                }
                            }
                            description {
                                childMarkdownRemark {
                                    html
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    const content = data.allContentfulLayoutPosts.edges.find((edge) => edge.node.id === contentModuleId);
    return (
        <section id="posts" className="posts section" style={{ paddingRight: 0 }}>
            <div className="container mx-auto">
                <h2 className="section__title text-center mb-16" data-sal="fade" data-sal-easing="ease-in-cubic">
                    {content.node.heading}{" "}
                </h2>
                <ul className="post-list" data-sal="fade" data-sal-easing="ease-in-cubic">
                    {content.node.posts.map((post) => {
                        return (
                            <li key={post.slug}>
                                <PostPreview post={post} key={post.id} />
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div style={{ width: 100, display: "flex", placeContent: "center", placeItems: "center" }}>
                <Link to="/post">
                    <button className="post-btn" data-sal="fade" data-sal-delay="300">
                        <span>View More</span>
                    </button>
                </Link>
            </div>
        </section>
    );
};

Posts.propTypes = {
    contentModuleId: PropTypes.string.isRequired,
};

export default Posts;
