const FireType = require('../models/FireType');
const FireStock = require('../models/FireStock');

module.exports = {
  async index(req, res) {
    const fireStock = await FireStock.findAll();

    return res.json(fireStock);
  },
  async show(req, res) {
    const { id } = req.params;

    const fireType = await FireType.findByPk(id, {
      include: {
        association: 'fireStocks',
      },
    });

    return res.json(fireType);
  },
};
