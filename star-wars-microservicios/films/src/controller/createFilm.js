const { response } = require('../utils');
const Film = require('../data');

module.exports = async (req, res) => {
  const filmBody = req.body;
  const film = await Film.create(filmBody);
  response(res, 200, film);
};
