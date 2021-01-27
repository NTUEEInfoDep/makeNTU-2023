require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `2021 makeNTU: Cabin Fever`,
    description: `A One-page Gatsby for makeNTU2021`,
    author: `NTUEEInfoDep`,
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `material icons`,
          `Roboto\:400,700`,
          `Rubik\:400,700`,
          `Geostar\:400,700`,
        ],
        display: "swap",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-resolve-src",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `2021 makeNTU: Cabin Fever`,
        short_name: `makeNTU`,
        start_url: `/`,
        background_color: `#6C63FF`,
        theme_color: `#6C63FF`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
  ],
};
