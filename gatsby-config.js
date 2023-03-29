module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-source-pokeapi`,
      options: {
        nbOfPokemons: 151,
      },
    },
  ],
};
