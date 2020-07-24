const FireType = require('../models/FireType');

module.exports = {
  async index(req, res) {
    const fireTypes = await FireType.findAll();

    return res.json(fireTypes);
  },
};
