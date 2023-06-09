const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const NODE_TYPE = "Pokemon";

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
  getNodesByType,
}) => {
  const { createNode } = actions;

  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const json = await response.json();
  const { results = [] } = json;

  const pokemon = await Promise.all(
    results.map(async (result) => {
      const { url } = result;
      const pokeResponse1 = await fetch(url);
      const json1 = await pokeResponse1.json();
      const { species } = json1;
      const pokeResponse2 = await fetch(species.url);
      const json2 = await pokeResponse2.json();
      return { ...json1, ...json2 };
    })
  );

  pokemon.forEach((node, index) => {
    return createNode({
      ...node,
      id: createNodeId(`${NODE_TYPE}-${node.id}`),
      parent: null,
      children: [],
      internal: {
        type: NODE_TYPE,
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node),
      },
    });
  });

  return;
};

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allPokemon {
        edges {
          node {
            id
            name
            names {
              name
              language {
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
              version {
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
    }
  `);
  data.allPokemon.edges.forEach((edge) => {
    const slug = edge.node.name;
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/pokemon-template.js`),
      context: edge.node,
    });
  });
};
