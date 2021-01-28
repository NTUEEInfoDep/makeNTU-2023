import React from "react";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import "templates/postTemplate.css";

export const query = graphql`
    query PostBySlug($slug: String!, $layoutSlug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        contentfulPost(slug: { eq: $slug }) {
            title
            description {
                childMarkdownRemark {
                    html
                }
            }
            publishDate(formatString: "MMMM Do, YYYY")
            heroImage {
                fluid(maxWidth: 1180, background: "rgb:000000") {
                    ...GatsbyContentfulFluid_tracedSVG
                }
            }
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
        contentfulLayout(slug: { eq: $layoutSlug }) {
            id
            slug
            title
            description
            contentful_id
            menu {
                name
                type
                menuItems {
                    id
                    title
                    url
                }
            }
        }
    }
`;

export default function PostTemplate({ data }) {
    const post = data.contentfulPost;
    const title = data.contentfulLayout.title;
    const description = data.contentfulLayout.description;
    // const menus = data.contentfulLayout.menu;

    return (
        <Layout menus={null}>
            <SEO title={title} description={description} />
            <div className="heroImage-container container section mx-auto">
                <Img className="heroImage" alt={post.title} fluid={post.heroImage.fluid} />
            </div>
            <div className="post container section mx-auto">
                <h2 className="w-full md:w-3/4 font-bold text-5xl leading-none mb-6">{post.title}</h2>
                <p className="w-full md:w-3/4">{post.publishDate}</p>
                <div
                    dangerouslySetInnerHTML={{
                        __html: post.body.childMarkdownRemark.html,
                    }}
                />
            </div>
        </Layout>
    );
}
