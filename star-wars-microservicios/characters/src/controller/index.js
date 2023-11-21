//catchedAsync es una funcion de orden superior
const { catchedAsync } = require('../utils');

module.exports = {
  getCharacter: catchedAsync(require('./getCharacters')),
  createCharacter: catchedAsync(require('./createCharacter')),
};
