import { useStaticQuery, graphql } from "gatsby";

const usePokemon = () => {
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
};

export default usePokemon;
