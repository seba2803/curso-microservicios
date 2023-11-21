// catchedAsync es una funcion de orden superior
const { catchedAsync } = require('../utils');

module.exports = {
  getFilms: catchedAsync(require('./getFilms')),
};
