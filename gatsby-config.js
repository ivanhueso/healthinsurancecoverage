module.exports = {
  siteMetadata: {
    title: `Get Best Offers`,
    description: `Subscribe today and get the lastest health offers, wealth offers, and relationship offers`,
    author: `@getbestoffers`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '184623225387301',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Droid Sans'],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `health-insurance-coverage`,
        short_name: `hic`,
        start_url: `/`,
        background_color: `#354eaa`,
        theme_color: `#354eaa`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
