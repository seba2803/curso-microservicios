const mongoose = require('mongoose');
const { MONGO_URL } = require('../config/envs');
const Schemas = require('./schemas');

const conn = mongoose.createConnection(MONGO_URL);

//? populate lo que haces popular aquellos registros que hacen referencia
//? es decir si en una propiedad tenemos definido el tipo ref: "otro modelo"
//? lo que hace populate() es traerme la informacion a la que hace referencia
//! ejemplo de uso
//* .populate("nombre de la propiedad del esquema que posee ref", ["propiedad que deseo saber del populado"])
//! ejemplo real:
//* Character.find()
//*   .populate('films', ['_id', 'title'])
//*   .then((res) => {
//*     console.log(res[0]);
//*   });

module.exports = {
  Character: conn.model('Character', Schemas.characterSchema),
  Film: conn.model('Film', Schemas.filmSchema),
  Planet: conn.model('Planet', Schemas.planetSchema),
};
