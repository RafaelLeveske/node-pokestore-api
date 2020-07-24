module.exports = {
  up: async queryInterface =>
    queryInterface.bulkInsert(
      'Stocks',
      [
        {
          id: 197,
          amount: 3,
        },
        {
          id: 198,
          amount: 5,
        },
        {
          id: 215,
          amount: 2,
        },
        {
          id: 228,
          amount: 1,
        },
        {
          id: 229,
          amount: 5,
        },
        {
          id: 248,
          amount: 10,
        },
      ],
      {},
    ),

  down: queryInterface => queryInterface.bulkDelete('Stocks', null, {}),
};
