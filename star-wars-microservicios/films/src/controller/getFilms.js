const Film = require('../data');

module.exports = async (req, res) => {
  const films = await Film.list();
  res.status(200).json(films);
};
