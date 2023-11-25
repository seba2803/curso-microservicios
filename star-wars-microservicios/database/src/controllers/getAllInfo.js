const { response } = require('../utils');
const store = require('../database');

module.exports = async (req, res) => {
  const { model } = req.params;
  const data = await store[model].list();
  response(res, 200, data);
};
