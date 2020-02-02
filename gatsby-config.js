const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    author: config.name,
    siteUrl: config.siteUrl,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'PawelNiedzwiecki',
        short_name: 'PawelNiedzwiecki',
        start_url: '/',
        background_color: config.darkNavyColor,
        theme_color: config.navyColor,
        display: '',
        icon: `${__dirname}/src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Nunito:300,300i,400,400i,600,600i,700,700i|Open+Sans:400,400i,600,600i', 'sans-serif']
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
