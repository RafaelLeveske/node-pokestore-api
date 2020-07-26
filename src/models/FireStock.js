const { Model, DataTypes } = require('sequelize');

class FireStock extends Model {
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
    this.belongsTo(models.FireType, {
      foreignKey: 'id',
      as: 'fireTypes',
    });
  }
}
module.exports = FireStock;
