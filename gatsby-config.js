module.exports = {
  siteMetadata: {
    title: "Portfolio Sören Christ",
    description: "Portfolio Sören Christ",
    author: "Sören Christ",
    siteUrl: `https://soerenchrist.de`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Sören Christ Portfolio",
        short_name: "Sören Christ",
        start_url: "/",
        background_color: "#5C4D4D",
        theme_color: "#5C4D4D",
        display: "minimal-ui",
        icons: [
          {
            src: `/src/assets/favicon.ico`,
            sizes: `32x32`,
            type: `image/ico`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-96738144-3",
        // Setting this parameter is optional (requried for some countries such as Germany)
        anonymize: true
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    }
  ]
};
