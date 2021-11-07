require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Al Umarain Trucking`,
    description: `Come work with the best trucking company in the mid west`,
    author: `Umar Mitchell`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingId: 'G-NP37G0LW75',
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: true,
    //     // Avoids sending pageview hits from custom paths
    //     exclude: ['/preview/**', '/do-not-track/me/too/'],

    //     // defaults to false
    //     enableWebVitalsTracking: true,
    //   },
    // },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.GATSBY_WP_API_URL,
      },
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Al Umarain Trucking`,
        short_name: `Al Umarain`,
        start_url: `/`,
        background_color: `#1A202C`,
        theme_color: `#1A202C`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
