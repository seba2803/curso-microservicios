const { response } = require('../utils');
const store = require('../database');

module.exports = async (req, res) => {
  const { model } = req.params;
  const props = req.body;
  const data = await store[model].insert(props);
  response(res, 200, data);
};
