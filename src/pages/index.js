import * as React from "react";
import { graphql } from "gatsby";
import {
  Link,
  useTranslation,
  I18nextContext,
} from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import usePokemon from "../hooks/usePokemon";
import {
  searchWrapper,
  searchInput,
  emptySearch,
  emptySearchText,
  pokedex,
  pokedexItem,
  pokemonLink,
  pokemonImage,
  pokemonImageImg,
  pokemonDetails,
  pokemonDetailsWrapper,
  pokemonDetailsTitle,
  pokemonIndex,
} from "./index.module.css";

const IndexPage = () => {
  const { t } = useTranslation();
  const { language } = React.useContext(I18nextContext);
  const { pokemonData } = usePokemon();
  const allPokemon = pokemonData.nodes.map((node) => {
    const { id, name, names, sprites, pokedex_numbers } = node;
    return {
      id,
      slug: name,
      name: names.find((name) => name.language.name === language).name,
      image: sprites.front_default,
      pokedex_number: pokedex_numbers.find(
        (pokedex) => pokedex.pokedex.name === "kanto"
      ).entry_number,
    };
  });
  const [filteredPokemon, setFilteredPokemon] = new React.useState(allPokemon);

  const filterBySearch = (event) => {
    const query = event.target.value;
    var updatedPokemon = [...allPokemon];
    updatedPokemon = updatedPokemon.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredPokemon(updatedPokemon);
  };

  return (
    <Layout>
      <div className={searchWrapper}>
        <input
          placeholder={t("search_placeholder")}
          className={searchInput}
          onChange={filterBySearch}
        />
      </div>
      {filteredPokemon.length ? (
        <ul className={pokedex}>
          {filteredPokemon.map((pokemon) => {
            return (
              <li key={pokemon.id} className={pokedexItem}>
                <Link to={`/${pokemon.slug}`} className={pokemonLink}>
                  <div className={pokemonImage}>
                    <img
                      src={pokemon.image}
                      alt={`${pokemon.name} ${t("thumbnail")}`}
                      loading="lazy"
                      className={pokemonImageImg}
                    />
                  </div>
                  <div className={pokemonDetails}>
                    <div className={pokemonDetailsWrapper}>
                      <h3 className={pokemonDetailsTitle}>{pokemon.name}</h3>
                    </div>
                    <div>
                      <span className={pokemonIndex}>
                        {pokemon.pokedex_number}
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className={emptySearch}>
          <p className={emptySearchText}>{t("empty_search")}</p>
          <StaticImage
            src="../images/icon.png"
            alt={t("pokeball")}
            placeholder="blurred"
            width={250}
            height={250}
          />
        </div>
      )}
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["translation"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
