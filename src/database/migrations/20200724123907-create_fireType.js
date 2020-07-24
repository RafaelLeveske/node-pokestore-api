module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('FireTypes', {
      id: {
        type: Sequelize.INTEGER,
        primarKey: true,
        allowNull: false,
        unique: true,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
    });
  },

  down: async queryInterface => {
    return queryInterface.dropTable('FireTypes');
  },
};
