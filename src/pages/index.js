import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/clifford.jpg"
      />
      <ul>
        {data.allPokemon.nodes.map((pokemon) => (
          <li key={pokemon.name}>
            <h3>{pokemon.name}</h3>
            <GatsbyImage image={pokemon.image} />
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allPokemon {
      nodes {
        name
        image
      }
    }
  }
`;

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
