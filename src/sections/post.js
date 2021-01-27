import React from "react";
import { graphql } from "gatsby";
import PostPreview from "components/postPreview";

const Posts = () => {
  const data = graphql`
    query layoutPosts {
      allContentfulPost(sort: { fields: [publishDate], order: DESC }) {
        edges {
          node {
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
              internal {
                content
              }
            }
          }
        }
      }
    }
  `;

  const posts = data.allContentfulPost.edges.find();
  return (
    <section id="posts" className="posts container section mx-auto">
      <div>
        <h2
          className="section__title text-center mb-16"
          data-sal="fade"
          data-sal-easing="ease-in-cubic"
        >
          Posts
        </h2>
        <ul className="post-list">
          {posts.map(({ node }) => {
            return (
              <li key={node.slug}>
                <PostPreview article={node} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Posts;
