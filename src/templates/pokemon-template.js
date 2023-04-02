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
  pokemonType,
} from "./pokemon-template.module.css";

const PokemonTemplate = ({ data }) => {
  const pokemon = data.allPokemon.nodes[0];
  return (
    <Layout pageTitle={pokemon.name}>
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
          <p className={pokemonType}>
            {pokemon.types.map((type) => type.type.name)}
          </p>
          <p>{pokemon.flavor_text_entries[0].flavor_text}</p>
        </div>
      </div>
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
          other {
            official_artwork {
              front_default
            }
          }
        }
        flavor_text_entries {
          flavor_text
        }
        genera {
          genus
        }
        pokedex_numbers {
          entry_number
        }
      }
    }
  }
`;

export default PokemonTemplate;
