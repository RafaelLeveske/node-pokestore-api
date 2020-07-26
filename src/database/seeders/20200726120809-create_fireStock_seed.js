module.exports = {
  up: async queryInterface =>
    queryInterface.bulkInsert(
      'FireStocks',
      [
        {
          id: 4,
          amount: 3,
        },
        {
          id: 5,
          amount: 5,
        },
        {
          id: 6,
          amount: 2,
        },
        {
          id: 37,
          amount: 1,
        },
        {
          id: 38,
          amount: 5,
        },
        {
          id: 58,
          amount: 10,
        },
      ],
      {},
    ),

  down: queryInterface => queryInterface.bulkDelete('FireStocks', null, {}),
};
