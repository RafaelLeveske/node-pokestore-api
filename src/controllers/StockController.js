const DarkType = require('../models/DarkType');
const Stock = require('../models/Stock');

module.exports = {
  async index(req, res) {
    const stock = await Stock.findAll();

    return res.json(stock);
  },
  async show(req, res) {
    const { id } = req.params;

    const darkType = await DarkType.findByPk(id, {
      include: {
        association: 'stocks',
      },
    });

    return res.json(darkType);
  },
};
