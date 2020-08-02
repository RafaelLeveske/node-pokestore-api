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
          description:
            'Tem preferência por coisas quentes, quando chove vapor é gerado pela ponta se sua cauda.',
          height: 0.6,
          weight: 8.5,
          category: 'Lizard',
          abilities: 'Blaze ',
        },
        {
          id: 5,
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
          title: 'Charmeleon',
          price: 799.0,
          description:
            'Tem natureza forte, em batalha tem muita habilidade com o uso de suas garras.',
          height: 1.1,
          weight: 19.0,
          category: 'Flame',
          abilities: 'Blaze',
        },
        {
          id: 6,
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
          title: 'Charizard',
          price: 999.0,
          description:
            'Capaz de lançar chamas tão fortes que podem derreter rochas.',
          height: 1.7,
          weight: 90.5,
          category: 'Flame',
          abilities: 'Blaze',
        },
        {
          id: 37,
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png',
          title: 'Vulpix',
          price: 499.0,
          description:
            'Quando ainda jovem tem seis belas caudas, quanto mais velho for mais caudas terá.',
          height: 0.6,
          weight: 9.9,
          category: 'Fox',
          abilities: 'Flash Fire',
        },
        {
          id: 38,
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png',
          title: 'Ninetales',
          price: 699.0,
          description:
            'É dito que podem viver até 1.000 anos, e cada uma de suas caudas é dotado de poderes sobrenaturais. ',
          height: 1.1,
          weight: 19.9,
          category: 'Fox',
          abilities: 'Flash Fire',
        },
        {
          id: 58,
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png',
          title: 'Growlithe',
          price: 199.0,
          description:
            'Tem natureza corajosa e confiável, encara qualquer tipo de oponente',
          height: 0.9,
          weight: 19.0,
          category: 'Puppy',
          abilities: 'Intimidate',
        },
      ],
      {},
    ),

  down: queryInterface => queryInterface.bulkDelete('FireTypes', null, {}),
};
