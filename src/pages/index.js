import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import usePokemon from "../hooks/usePokemon";
import {
  pokedex,
  pokedexItem,
  pokemonLink,
  pokemonImage,
  pokemonImageImg,
  pokemonDetails,
  pokemonDetailsWrapper,
  pokemonDetailsTitle,
  pokemonDetailsText,
  pokemonIndex,
} from "./index.module.css";

const IndexPage = ({ data }) => {
  const { pokemon: allPokemon } = usePokemon();

  return (
    <Layout pageTitle="Gatsby Pokédex">
      <ul className={pokedex}>
        {allPokemon.map((pokemon, index) => {
          return (
            <li key={pokemon.id} className={pokedexItem}>
              <Link to={`/${pokemon.name}`} className={pokemonLink}>
                <div className={pokemonImage}>
                  <img
                    src={pokemon.image}
                    alt={`${pokemon.name} Thumbnail`}
                    className={pokemonImageImg}
                  />
                </div>
                <div className={pokemonDetails}>
                  <div className={pokemonDetailsWrapper}>
                    <h3 className={pokemonDetailsTitle}>{pokemon.name}</h3>
                    <p className={pokemonDetailsText}>
                      {pokemon.types.join(", ")}
                    </p>
                  </div>
                  <div>
                    <span className={pokemonIndex}>{index + 1}</span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
