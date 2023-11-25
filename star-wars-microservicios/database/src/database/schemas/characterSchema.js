const { Schema } = require('mongoose');

const characterSchema = new Schema({
  _id: String,
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  // ref: "Planet" hace referencia al modelo Planet NO al Schema
  homeworld: { type: String, ref: 'Planet' }, // referencia al id del planeta
  // ref: "Film" hace referencia al modelo Film NO al Schema
  films: [{ type: String, ref: 'Film' }], // array de referencias a peliculas
});

//* de esta manera se crean metodos al modelo
characterSchema.statics.list = async function () {
  return await this.find()
    .populate('homeworld', ['_id', 'name'])
    .populate('films', ['_id', 'title']);
};

characterSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate('homeworld', ['_id', 'name'])
    .populate('films', ['_id', 'title']);
};

characterSchema.statics.insert = async function (character) {
  return await this.create(character);
};

module.exports = characterSchema;
