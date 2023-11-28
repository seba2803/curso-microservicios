const { ClientError } = require('../utils/errors');
const store = require('../database');

module.exports = (req, res, next) => {
  const { model, id } = req.params;

  if (isNaN(parseInt(id)))
    throw new ClientError('Debe ser un id de tipo entero', 400);
  store[model]
    .get(id)
    .then((res) => {
      if (res) next();
      else throw new ClientError('No Existe un documento con el id ' + id, 400);
    })
    .catch((err) => next(err));
};
