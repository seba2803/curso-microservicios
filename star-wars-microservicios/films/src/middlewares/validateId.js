const { ClientError } = require('../utils/errors');

module.exports = (req, res, next) => {
  const { id } = req.params;

  if (isNaN(parseInt(id)))
    throw new ClientError('Debe ser un id  de tipo entero', 400);
  else next();
};
