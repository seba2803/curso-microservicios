const Character = require('../data');

module.exports = async (req, res) => {
  const character = await Character.list();
  res.status(200).json(character);
};
