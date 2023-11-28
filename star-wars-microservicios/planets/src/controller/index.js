// catchedAsync es una funcion de orden mayor
const { catchedAsync } = require('../utils');

module.exports = {
  getAllPlanets: catchedAsync(require('./getAllPlanets')),
  getPlanet: catchedAsync(require('./getPlanet')),
  createPlanet: catchedAsync(require('./createPlanet')),
};
