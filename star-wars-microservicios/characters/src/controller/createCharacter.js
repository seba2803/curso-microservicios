const { response } = require('../utils');
const Character = require('../data');

module.exports = async (req, res) => {
  const characterBody = req.body;
  const character = await Character.create(characterBody);
  response(res, 200, character);
};
