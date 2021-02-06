import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, Link } from "gatsby";
import "./postListTemplate.css";

export const query = graphql`
    query($slug: String!, $skip: Int!, $limit: Int!) {
        contentfulLayout(slug: { eq: $slug }) {
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
            contentModule {
                ... on Node {
                    id
                }
            }
        }
        allContentfulPost(sort: { fields: publishDate, order: DESC }, limit: $limit, skip: $skip) {
            totalCount
            edges {
                node {
                    id
                    slug
                    title
                    description {
                        childMarkdownRemark {
                            html
                        }
                    }
                    publishDate(formatString: "MMMM Do, YYYY")
                    body {
                        childMarkdownRemark {
                            excerpt
                        }
                    }
                }
            }
        }
    }
`;

export default function PostListTemplate({ data, pageContext }) {
    const { currentPage, numPages } = pageContext;
    const title = data.contentfulLayout.title;
    const description = data.contentfulLayout.description;
    const menus = data.contentfulLayout.menu;

    return (
        <Layout menus={menus}>
            <SEO title={title} description={description} />
            <section id="posts" className="posts section">
                <div className="container mx-auto">
                    <h2 className="section__title text-center mb-16" data-sal="fade" data-sal-easing="ease-in-cubic">
                        All Posts{" "}
                        <span style={{ color: "gray", fontSize: 20 }}>— {data.allContentfulPost.totalCount} Posts</span>
                    </h2>
                    <ul style={{ minHeight: 150 }}>
                        {data.allContentfulPost.edges.map(({ node }) => (
                            <li key={node.slug} style={{ marginBottom: 20 }}>
                                <Link to={`/post/${node.slug}`}>
                                    <h3 className="service__title" style={{ fontSize: 32, marginBottom: 0 }}>
                                        {node.title}{" "}
                                        <span style={{ color: "gray", fontSize: 20 }}>— {node.publishDate}</span>
                                    </h3>
                                </Link>
                                <p style={{ fontSize: 18, marginLeft: 2 }}>{node.body.childMarkdownRemark.excerpt}</p>
                            </li>
                        ))}
                    </ul>
                    <div class="pagination" style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                        {Array.from({ length: numPages }, (_, i) => (
                            <Link key={`pagination-number${i + 1}`} to={i === 0 ? "/post" : `/post/${i + 1}`}>
                                <div class={i + 1 === currentPage ? "index index-active" : "index"}>{i + 1}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
