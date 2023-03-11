/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: `gatsby-transformer-json`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `applications`,
        path: `${__dirname}/src/data/applications`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `endpoints`,
        path: `${__dirname}/src/data/endpoints`,
      },
    },
  ],
};
