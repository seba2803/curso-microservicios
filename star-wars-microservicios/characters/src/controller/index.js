//catchedAsync es una funcion de orden superior
const { catchedAsync } = require('../utils');

module.exports = {
  getAllCharacters: catchedAsync(require('./getAllCharacters')),
  createCharacter: catchedAsync(require('./createCharacter')),
  getCharacter: catchedAsync(require('./getCharacter')),
};
