const axios = require('axios');
const { URL_API } = require('../config/envs');

module.exports = {
  list: async () => {
    const { data } = await axios.get(URL_API);
    return data;
  },
  get: async (id) => {
    const { data } = await axios.get(`${URL_API}/${id}`);
    return data;
  },
  create: async (character) => {
    await axios.post(URL_API, character);
    return 'Documento creado con éxito';
  },
};
