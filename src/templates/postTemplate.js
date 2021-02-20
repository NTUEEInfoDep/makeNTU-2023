import React from "react";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, Link } from "gatsby";
import ReactPlayer from "react-player";
import "templates/postTemplate.css";
import { Minimize } from "@material-ui/icons";

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
            files {
                file {
                    fileName
                    url
                }
            }
            videoUrl
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
    const files = post.files;

    return (
        <Layout menus={null} back={true}>
            <SEO title={title} description={description} />
            <div>
                <div className="heroImage-container container section mx-auto" style={{ maxWidth: "1000px" }}>
                    <Img className="heroImage" alt={post.title} fluid={post.heroImage.fluid} />
                </div>
                <div className="post container section mx-auto mb-20" style={{ maxWidth: "1000px" }}>
                    <h2 className="w-full font-medium text-4xl leading-none mb-0">{post.title}</h2>
                    <p className="font-normal mb-3" style={{ color: "gray" }}>
                        {post.publishDate}
                    </p>
                    <div
                        className="post-body"
                        dangerouslySetInnerHTML={{
                            __html: post.body.childMarkdownRemark.html,
                        }}
                    />
                    <br></br>
                    {post.videoUrl && (
                        <div>
                            {post.videoUrl.map((url) => (
                                <div className="video-container">
                                    <ReactPlayer url={url} className="video" width="min(90vw, 640px)" />
                                </div>
                            ))}
                        </div>
                    )}
                    {files ? (
                        <div>
                            <hr></hr>
                            <p className="text-2xl text-bold mb-5">文章附件：</p>
                            <div className="file-container">
                                {files.map((file) => {
                                    var url = file.file.url;
                                    try {
                                        if (url.slice(0, 2) === "//") {
                                            url = `https:${url}`;
                                        } else if (url.slice(0, 4) === "http") {
                                        } else {
                                            throw new Error(`Invalid file download URL: '${url}'`);
                                        }
                                    } catch (e) {
                                        console.error(e);
                                    }
                                    return (
                                        <Link to={url}>
                                            <div style={{ display: "flex", flexDirection: "column" }}>
                                                <i
                                                    className="material-icons text-primary text-4xl"
                                                    style={{ textAlign: "center" }}
                                                >
                                                    sim_card_download
                                                </i>
                                                <p style={{ textAlign: "center", wordWrap: "break-word" }}>
                                                    {file.file.fileName}
                                                </p>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </Layout>
    );
}
