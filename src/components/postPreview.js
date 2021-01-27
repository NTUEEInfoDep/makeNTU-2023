import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import styles from "../assets/css/components/postPreview.css";

export default ({ post }) => (
  <div className={styles.preview}>
    <Img alt="" fluid={post.heroImage.fluid} />
    <h3 className={styles.previewTitle}>
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
        <p className={styles.tag} key={tag}>
          {tag}
        </p>
      ))}
  </div>
);
