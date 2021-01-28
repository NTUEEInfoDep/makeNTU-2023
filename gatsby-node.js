const path = require("path");

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const layoutTemplate = path.resolve(`src/templates/pageTemplate.js`);
    const postTemplate = path.resolve(`src/templates/postTemplate.js`);
    return graphql(`
        query {
            allContentfulLayout {
                edges {
                    node {
                        slug
                    }
                }
            }
            allContentfulPost {
                edges {
                    node {
                        title
                        slug
                    }
                }
            }
        }
    `).then((result) => {
        if (result.errors) {
            throw result.errors;
        }
        result.data.allContentfulLayout.edges.forEach((edge) => {
            if (edge.node.slug === "404") {
                // for 404 page we use custom page at src/pages/404.js
                return;
            } else {
                createPage({
                    path: edge.node.slug,
                    component: layoutTemplate,
                    context: {
                        slug: edge.node.slug,
                    },
                });
            }
        });
        result.data.allContentfulPost.edges.forEach((edge) => {
            createPage({
                path: `/post/${edge.node.slug}`,
                component: postTemplate,
                context: {
                    slug: edge.node.slug,
                    layoutSlug: "post",
                },
            });
        });
    });
};
