const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const DarkType = require('../models/DarkType');
const FireType = require('../models/FireType');
const Stock = require('../models/Stock');

const connection = new Sequelize(dbConfig);

DarkType.init(connection);
FireType.init(connection);
Stock.init(connection);

DarkType.associate(connection.models);
Stock.associate(connection.models);

module.exports = connection;
