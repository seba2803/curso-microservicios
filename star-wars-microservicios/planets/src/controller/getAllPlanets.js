const Planet = require('../data');
const { response } = require('../utils');

module.exports = async (req, res) => {
  const planet = await Planet.list();
  response(res, 200, planet);
};
