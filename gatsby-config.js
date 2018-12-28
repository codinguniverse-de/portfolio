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
            src: `/static/assets/favicon.ico`,
            sizes: `32x32`,
            type: `image/ico`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'codinguniverse.de',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: false,
        includedRoutes: [
          "/*/*/posts"
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    }
  ]
};
