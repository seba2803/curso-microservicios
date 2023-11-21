const characters = require('./characters.json');

module.exports = {
  list: () => {
    return characters;
  },
  create: async () => {
    throw Error('hay un error al momento de crear el personaje');
  },
};
