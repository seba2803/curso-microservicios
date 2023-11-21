const { response } = require('../utils');
const Character = require('../data');

module.exports = async (req, res) => {
  const character = await Character.create();
  response(res, 200, character);
};
