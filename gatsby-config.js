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
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: ({ node, object, isArray }) =>
          object.application_id
            ? `Endpoints`
            : object.authorization
            ? `Requests`
            : `Json`,
      },
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
