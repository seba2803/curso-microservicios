const { catchedAsync } = require('../utils');

module.exports = {
  getAllInfo: catchedAsync(require('./getAllInfo')),
  getOnlyOne: catchedAsync(require('./getOnlyOne')),
};
