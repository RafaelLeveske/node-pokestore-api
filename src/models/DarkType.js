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
    this.hasMany(models.Stock, {
      foreignKey: 'id',
      as: 'stocks',
    });
  }
}
module.exports = DarkType;
