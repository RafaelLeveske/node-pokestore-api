const DarkType = require('../models/DarkType');
const DarkStock = require('../models/DarkStock');

module.exports = {
  async index(req, res) {
    const darkStock = await DarkStock.findAll();

    return res.json(darkStock);
  },
  async show(req, res) {
    const { id } = req.params;

    const darkType = await DarkType.findByPk(id, {
      include: {
        association: 'darkStocks',
      },
    });

    return res.json(darkType);
  },
};
