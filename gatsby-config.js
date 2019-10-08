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
    keywords: "gatsby, reactjs, graphql, javascript, programming, concepts, web development, popular programming myths, web development articles, Daniel Don, software developer, spillcode, spillili",
    image: "https://res.cloudinary.com/dcft8yhab/image/upload/v1569179760/IMG_20190922_130327_5_1569178054293.jpg",
    url: "https://danieldon.tech",
    twitterHandle: "@spillcode",
    icon: "https://favicon-generator.org/favicon-generator/htdocs/favicons/2015-01-13/d8a4c4a5b1e1b908b47010382c1e4438.ico",
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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daniel Don`,
        short_name: `D Blog`,
        start_url: `/`,
        background_color: `#141d26`,
        theme_color: `#141d26`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`
  ],
}
