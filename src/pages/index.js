import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import usePokemon from '../hooks/usePokemon';

const IndexPage = ({ data }) => {
  const { pokemon: allPokemon } = usePokemon();

  return (
    <Layout pageTitle="Home Page">
      <ul className="pokedex">
        {allPokemon.map((pokemon, index) => {
          return (
            <li key={pokemon.id} className="pokemon">
              <div className="pokemon-image">
                <img src={pokemon.image} alt={`${pokemon.name} Thumbnail`} />
              </div>
              <div className="pokemon-details">
                <div>
                  <h3>{pokemon.name}</h3>
                  <p>{pokemon.types.join(", ")}</p>
                </div>
                <div>
                  <span className="pokemon-index">{index + 1}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
