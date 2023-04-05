import * as React from "react";
import { graphql } from "gatsby";
import {
  Link,
  useTranslation,
  I18nextContext,
} from "gatsby-plugin-react-i18next";
import Layout from "../components/layout";
import Seo from "../components/seo";
import {
  pokemonHeader,
  pokemonName,
  pokemonIndex,
  pokemonWrapper,
  pokemonImage,
  pokemonContent,
  pokemonLastDescription,
  pokemonListLink,
} from "./pokemon-template.module.css";

const PokemonTemplate = ({ pageContext }) => {
  const { t } = useTranslation();
  const { language } = React.useContext(I18nextContext);
  const pokemon = {
    id: pageContext.id,
    slug: pageContext.name,
    name: pageContext.names.find((name) => name.language.name === language)
      .name,
    pokedex_number: pageContext.pokedex_numbers.find(
      (pokedex) => pokedex.pokedex.name === "kanto"
    ).entry_number,
    image: pageContext.sprites.other.official_artwork.front_default,
    genus: pageContext.genera.find((genus) => genus.language.name === language)
      .genus,
    description1: pageContext.flavor_text_entries.find(
      (description) =>
        description.language.name === language &&
        description.version.name === "x"
    ).flavor_text,
    description2: pageContext.flavor_text_entries.find(
      (description) =>
        description.language.name === language &&
        description.version.name === "y"
    ).flavor_text,
  };

  return (
    <Layout>
      <div className={pokemonHeader}>
        <h1 className={pokemonName}>{pokemon.name} N° </h1>
        <span className={pokemonIndex}>{pokemon.pokedex_number}</span>
      </div>

      <div className={pokemonWrapper}>
        <div className={pokemonImage}>
          <img
            src={pokemon.image}
            alt={`${pokemon.name}`}
            width={475}
            height={475}
          />
        </div>
        <div className={pokemonContent}>
          <h2>{pokemon.genus}</h2>
          <p>{pokemon.description1.replace(/(\f|\n)/gm, " ")}</p>
          <p className={pokemonLastDescription}>
            {pokemon.description2.replace(/(\f|\n)/gm, " ")}
          </p>
          <Link to="/" className={pokemonListLink}>
            {t("pokemon_list")}
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export const Head = ({ pageContext }) => (
  <Seo
    title={pageContext.name.charAt(0).toUpperCase() + pageContext.name.slice(1)}
  />
);

export default PokemonTemplate;

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
