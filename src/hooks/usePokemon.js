import { useStaticQuery, graphql } from "gatsby";

export default function usePokemon() {
  const data = useStaticQuery(graphql`
    query {
      allPokemon {
        nodes {
          id
          name
          names {
            name
            language {
              name
            }
          }
          sprites {
            front_default
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
  `);

  const pokemonData = data.allPokemon;

  return {
    pokemonData,
  };
}
