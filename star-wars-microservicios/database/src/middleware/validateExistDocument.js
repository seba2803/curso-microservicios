const { ClientError } = require('../utils/errors');
const store = require('../database');

module.exports = (req, res, next) => {
  const { model } = req.params;
  const { _id } = req.body;
  store[model]
    .get(_id)
    .then((res) => {
      if (res) throw new ClientError('Ya existe un documento con ese id', 402);
      else next();
    })
    .catch((err) => {
      next(err);
    });
};
