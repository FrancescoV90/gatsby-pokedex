const axios = require(`axios`);

const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

const getTypes = (arrayTypes) => {
  let types = [];
  arrayTypes.forEach(({ type }) => types.push(type.name));
  return types;
};

const getBaseStats = (arrayStats) => {
  let stats = {};
  arrayStats.forEach(({ base_stat, stat }) => (stats[stat.name] = base_stat));
  return stats;
};

const fetch = async (limit = 151) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
  const response = await axios.get(url);
  let pokemons = [];

  for (const pokemon of response.data.results) {
    const resp = await axios.get(pokemon.url);

    pokemons.push({
      name: pokemon.name,
      imageUrl: resp.data.sprites.front_default,
      stats: getBaseStats(resp.data.stats),
      types: getTypes(resp.data.types),
    });
  }
  return pokemons;
};

exports.sourceNodes = async (
  { actions, createContentDigest, createNodeId },
  pluginOptions
) => {
  const { createNode } = actions;

  const pokemons = await fetch(pluginOptions.nbOfPokemons);
  pokemons.forEach((pokemon) => {
    createNode({
      ...pokemon,
      id: createNodeId(`${pokemon.name}`),
      internal: {
        type: "POKEMON",
        content: JSON.stringify(pokemon),
        contentDigest: createContentDigest(pokemon),
      },
    });
  });

  return;
};

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  createNodeId,
  getCache,
}) => {
  const fileNode = await createRemoteFileNode({
    url: encodeUri(node.image),
    parentNodeId: node.id,
    createNode,
    createNodeId,
    getCache,
  });
  if (fileNode) {
    // save the ID of the fileNode on the Pokemon node
    node.remoteImage___NODE = fileNode.id;
  }
};
