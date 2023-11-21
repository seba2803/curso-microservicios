// catchedAsync es una funcion de orden mayor
const { catchedAsync } = require('../utils');

module.exports = {
  getPlanets: catchedAsync(require('./getPlanets')),
};
