const express = require('express');

const DarkTypeController = require('./controllers/DarkTypeController');
const FireTypeController = require('./controllers/FireTypeController');
const StockController = require('./controllers/StockController');

const routes = express.Router();

routes.get('/dark_type', DarkTypeController.index);
routes.get('/dark_type/:id', DarkTypeController.show);

routes.get('/fire_type', FireTypeController.index);

routes.get('/stock', StockController.index);
routes.get('/stock/:id', StockController.show);

module.exports = routes;
