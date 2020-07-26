const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const DarkType = require('../models/DarkType');
const FireType = require('../models/FireType');
const DarkStock = require('../models/DarkStock');
const FireStock = require('../models/FireStock');

const connection = new Sequelize(dbConfig);

DarkType.init(connection);
FireType.init(connection);
DarkStock.init(connection);
FireStock.init(connection);

DarkType.associate(connection.models);
FireType.associate(connection.models);
DarkStock.associate(connection.models);
FireStock.associate(connection.models);

module.exports = connection;
