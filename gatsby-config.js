module.exports = {
  siteMetadata: {
    title: `Health Insurance`,
    description: `Subscribe today and get the lastest news on health insurance, compare prices, take the right choice.`,
    author: `@healthinsurancecoverage`,
  },
  plugins: [
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
