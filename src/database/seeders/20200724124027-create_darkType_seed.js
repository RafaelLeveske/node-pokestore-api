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
          description:
            'Quando este pokemon fica nervoso, ele exala uma secreção venenosa, que pode atacar os olhos de seus oponentes.',
          height: 1.0,
          weight: 27.0,
          category: 'Moonlight',
          abilities: 'Syncronize',
        },
        {
          id: 198,
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/198.png',
          title: 'Murkrow',
          price: 199.0,
          description:
            'Tem uma fraqueza por objetos brilhantes, é conhecido por invadir tocas de Gabite, notórios colecionadores de jóias, sempre em busca de um tesouro.',
          height: 0.5,
          weight: 2.1,
          category: 'Darkness',
          abilities: 'Insomnia',
        },
        {
          id: 215,
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/215.png',
          title: 'Sneasel',
          price: 399.0,
          description:
            'Suas patas são formadas por garras afiadas, a qual as usa como mecânismo de ataque.',
          height: 0.9,
          weight: 28.0,
          category: 'Sharp Claw',
          abilities: 'Keen Eye',
        },
        {
          id: 228,
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/228.png',
          title: 'Houndour',
          price: 499.0,
          description:
            'Capacidade avançada de coperação, Quando se torna parceiro é muito leal ao dono.',
          height: 0.6,
          weight: 10.8,
          category: 'Dark',
          abilities: 'Flash Fire',
        },
        {
          id: 229,
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/229.png',
          title: 'Houndoom',
          price: 699.0,
          description:
            'Capacidade de expelir chamas tóxicas para derrotar seus oponentes, muito sociavel.',
          height: 1.4,
          weight: 35.0,
          category: 'Dark',
          abilities: 'Flash Fire',
        },
        {
          id: 248,
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/248.png',
          title: 'Tyranitar',
          price: 999.0,
          description:
            'Sua carapaça impenetravel o torna praticamente imune a ataques físicos, se sente confortavel com desafios.',
          height: 2.0,
          weight: 202.0,
          category: 'Armor',
          abilities: 'Sand Stream',
        },
      ],
      {},
    ),

  down: queryInterface => queryInterface.bulkDelete('DarkTypes', null, {}),
};
