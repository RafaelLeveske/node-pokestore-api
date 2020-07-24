module.exports = {
  up: async queryInterface =>
    queryInterface.bulkInsert(
      'DarkTypes',
      [
        {
          id: 197,
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png',
          title: 'Umbreon',
          price: 999.0,
        },
        {
          id: 198,
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/198.png',
          title: 'Murkrow',
          price: 199.0,
        },
        {
          id: 215,
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/215.png',
          title: 'Sneasel',
          price: 399.0,
        },
        {
          id: 228,
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/228.png',
          title: 'Houndour',
          price: 499.0,
        },
        {
          id: 229,
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/229.png',
          title: 'Houndoom',
          price: 699.0,
        },
        {
          id: 248,
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/248.png',
          title: 'Tyranitar',
          price: 999.0,
        },
      ],
      {},
    ),

  down: queryInterface => queryInterface.bulkDelete('DarkTypes', null, {}),
};
