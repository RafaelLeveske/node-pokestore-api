const { Model, DataTypes } = require('sequelize');

class DarkStock extends Model {
  static init(connection) {
    super.init(
      {
        amount: DataTypes.INTEGER,
      },
      {
        sequelize: connection,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.DarkType, {
      foreignKey: 'id',
      as: 'darkTypes',
    });
  }
}
module.exports = DarkStock;
