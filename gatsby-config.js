module.exports = {
  pathPrefix: "/charity",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "charity",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "charity",
        short_name: "charity",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#6383F3",
        display: "standalone",
        icon: "src/assets/images/favicon.svg",
      },
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
};
