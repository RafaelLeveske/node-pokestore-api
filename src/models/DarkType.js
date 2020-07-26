const { Model, DataTypes } = require('sequelize');

class DarkType extends Model {
  static init(connection) {
    super.init(
      {
        image: DataTypes.STRING,
        title: DataTypes.STRING,
        price: DataTypes.FLOAT,
      },
      {
        sequelize: connection,
      },
    );
  }

  static associate(models) {
    this.hasMany(models.DarkStock, {
      foreignKey: 'id',
      as: 'darkStocks',
    });
  }
}
module.exports = DarkType;
