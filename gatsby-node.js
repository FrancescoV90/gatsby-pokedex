const fetch = require('node-fetch');

const NODE_TYPE = 'Pokemon';

exports.sourceNodes = async ({ actions, createContentDigest, createNodeId, getNodesByType }) => {
  const { createNode } = actions;

  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const json = await response.json();
  const { results = [] } = json;

  const pokemon = await Promise.all(results.map(async result => {
    const { url } = result;
    const pokeResponse1 = await fetch(url);
    const json1 = await pokeResponse1.json();
    const { species } = json1;
    const pokeResponse2 = await fetch(species.url);
    const json2 = await pokeResponse2.json();
    return {...json1, ...json2}
  }));

  pokemon.forEach((node, index) => {
    return createNode({
      ...node,
      id: createNodeId(`${NODE_TYPE}-${node.id}`),
      parent: null,
      children: [],
      internal: {
        type: NODE_TYPE,
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node)
      }
    });
  });

  return;
};