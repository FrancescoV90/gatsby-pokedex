import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import {
  pokemonHeader,
  pokemonName,
  pokemonIndex,
  pokemonWrapper,
  pokemonImage,
  pokemonContent,
} from "./pokemon-template.module.css";

const PokemonTemplate = ({ data, pageContext }) => {
  console.log(pageContext);
  const pokemon = data.allPokemon.nodes[0];
  return (
    <Layout>
      <div className={pokemonHeader}>
        <h1 className={pokemonName}>{pokemon.name} N° </h1>
        <span className={pokemonIndex}>
          {pokemon.pokedex_numbers[0].entry_number}
        </span>
      </div>

      <div className={pokemonWrapper}>
        <div className={pokemonImage}>
          <img
            src={pokemon.sprites.other.official_artwork.front_default}
            alt={`${pokemon.name}`}
            width={475}
            height={475}
          />
        </div>
        <div className={pokemonContent}>
          <h2>{pokemon.genera[7].genus}</h2>
          <p>{pokemon.flavor_text_entries[0].flavor_text}</p>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($name: String!, $language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["index"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allPokemon(filter: { name: { eq: $name } }) {
      nodes {
        id
        name
        sprites {
          other {
            official_artwork {
              front_default
            }
          }
        }
        genera {
          genus
          language {
            name
          }
        }
        flavor_text_entries {
          flavor_text
          language {
            name
          }
        }
        pokedex_numbers {
          entry_number
          pokedex {
            name
          }
        }
      }
    }
  }
`;

export default PokemonTemplate;
