// catchedAsync es una funcion de orden superior
const { catchedAsync } = require('../utils');

module.exports = {
  getAllFilms: catchedAsync(require('./getAllFilms')),
  getFilm: catchedAsync(require('./getFilm')),
  createFilm: catchedAsync(require('./createFilm')),
};
