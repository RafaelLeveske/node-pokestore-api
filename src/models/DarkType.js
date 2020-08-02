const { Model, DataTypes } = require('sequelize');

class DarkType extends Model {
  static init(connection) {
    super.init(
      {
        image: DataTypes.STRING,
        title: DataTypes.STRING,
        price: DataTypes.FLOAT,
        description: DataTypes.STRING,
        height: DataTypes.FLOAT,
        weight: DataTypes.FLOAT,
        category: DataTypes.STRING,
        abilities: DataTypes.STRING,
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
