/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Daniel Don",
    description: "This is a blog that gives you any latest content from me",
    keywords: "gatsby, reactjs, graphql, javascript, programming, concepts",
    image: "https://res.cloudinary.com/dcft8yhab/image/upload/v1569179760/IMG_20190922_130327_5_1569178054293.jpg",
    url: "https://www.spillili.netlify.com",
    twitterHandle: "@spillcode"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    { resolve: `gatsby-transformer-remark` },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `codingsrc.com`,
        protocol: `http`,
        hostingWPCOM: false,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
