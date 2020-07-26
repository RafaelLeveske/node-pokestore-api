const DarkType = require('../models/DarkType');

module.exports = {
  async index(req, res) {
    const darkTypes = await DarkType.findAll();

    return res.json(darkTypes);
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
