const express = require('express');

const DarkTypeController = require('./controllers/DarkTypeController');
const FireTypeController = require('./controllers/FireTypeController');
const DarkStockController = require('./controllers/DarkStockController');
const FireStockController = require('./controllers/FireStockController');

const routes = express.Router();

routes.get('/dark_type', DarkTypeController.index);
routes.get('/dark_type/:id', DarkTypeController.show);

routes.get('/fire_type', FireTypeController.index);
routes.get('/fire_type/:id', FireTypeController.show);

routes.get('/dark_stock', DarkStockController.index);
routes.get('/dark_stock/:id', DarkStockController.show);

routes.get('/fire_stock', FireStockController.index);
routes.get('/fire_stock/:id', FireStockController.show);

module.exports = routes;
