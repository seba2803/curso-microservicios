const { response } = require('../utils');
const Planet = require('../data');

module.exports = async (req, res) => {
  const planetBody = req.body;
  const planet = await Planet.create(planetBody);
  response(res, 200, planet);
};
