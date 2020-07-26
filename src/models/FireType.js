const { Model, DataTypes } = require('sequelize');

class FireType extends Model {
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
    this.hasMany(models.FireStock, {
      foreignKey: 'id',
      as: 'fireStocks',
    });
  }
}
module.exports = FireType;
