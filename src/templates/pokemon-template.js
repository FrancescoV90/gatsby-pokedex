import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const PokemonTemplate = ({ data }) => {
  const pokemon = data.allPokemon.nodes[0];
  return (
    <Layout pageTitle={pokemon.name}>
      <div></div>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    allPokemon(filter: { name: { eq: $slug } }) {
      nodes {
        id
        name
        types {
          type {
            name
          }
        }
        sprites {
          front_default
        }
      }
    }
  }
`;

export default PokemonTemplate;
