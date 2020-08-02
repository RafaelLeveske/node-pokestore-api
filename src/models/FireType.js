const { Model, DataTypes } = require('sequelize');

class FireType extends Model {
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
    this.hasMany(models.FireStock, {
      foreignKey: 'id',
      as: 'fireStocks',
    });
  }
}
module.exports = FireType;
