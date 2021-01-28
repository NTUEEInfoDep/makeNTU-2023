import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";

import "../assets/css/components/postPreview.css";

const postPreview = ({ post }) => (
    <div className="preview">
        <Img alt="" fluid={post.heroImage.fluid} />
        <h3 className="previewTitle">
            <Link to={`/post/${post.slug}`}>{post.title}</Link>
        </h3>
        <small>{post.publishDate}</small>
        <div
            dangerouslySetInnerHTML={{
                __html: post.description.content,
            }}
        />
        {post.tags &&
            post.tags.map((tag) => (
                <p className="tag" key={tag}>
                    {tag}
                </p>
            ))}
    </div>
);

postPreview.propTypes = {
    post: PropTypes.object.isRequired,
};

export default postPreview;
