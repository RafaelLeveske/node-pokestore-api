module.exports = {
  up: async queryInterface =>
    queryInterface.bulkInsert(
      'FireTypes',
      [
        {
          id: 4,
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
          title: 'Charmander',
          price: 599.0,
        },
        {
          id: 5,
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
          title: 'Charmeleon',
          price: 799.0,
        },
        {
          id: 6,
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
          title: 'Charizard',
          price: 999.0,
        },
        {
          id: 37,
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png',
          title: 'Vulpix',
          price: 499.0,
        },
        {
          id: 38,
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png',
          title: 'Ninetales',
          price: 699.0,
        },
        {
          id: 58,
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png',
          title: 'Growlithe',
          price: 199.0,
        },
      ],
      {},
    ),

  down: queryInterface => queryInterface.bulkDelete('FireTypes', null, {}),
};
