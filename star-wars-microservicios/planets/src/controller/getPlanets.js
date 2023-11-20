const Planet = require('../data');

module.exports = async (req, res) => {
  const planet = await Planet.list();
  res.status(200).json(planet);
};
