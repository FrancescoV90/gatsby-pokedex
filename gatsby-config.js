module.exports = {
  siteMetadata: {
    title: "Gatsby Pokedex",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Pokedex`,
        short_name: `Gatsby Pokedex`,
        start_url: `/`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
