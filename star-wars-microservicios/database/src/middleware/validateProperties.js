const { ClientError } = require('../utils/errors');
const schemas = require('../database/schemas');

module.exports = (req, res, next) => {
  const { model } = req.params;
  const props = req.body;

  // keys enviadas por body
  const keysBody = Object.keys(props);

  if (!keysBody.length)
    throw new ClientError('Debe proporcionar las propiedades requeridas', 400);

  switch (model) {
    case 'Character':
      // keys del esquema Character
      const keysCharacters = Object.keys(schemas.characterSchema.obj);
      // keys que comparten keysCharacters y keyBody
      const keysResults = keysCharacters.filter((key) =>
        keysBody.includes(key)
      );

      if (keysResults.length < keysCharacters.length) {
        throw new ClientError(
          'No se proporcionaron las propiedades correctas o hay propiedades faltantes',
          400
        );
      }
      return next();

    case 'Film':
      // keys del esquema Film
      const keysFilm = Object.keys(schemas.filmSchema.obj);
      // keys que comparten keysFilm y keyBody
      const keysExist = keysFilm.filter((key) => keysBody.includes(key));

      if (keysExist.length < keysFilm.length) {
        throw new ClientError(
          'No se proporcionaron las propiedades correctas o hay propiedades faltantes',
          400
        );
      }
      return next();

    case 'Planet':
      // keys del esquema Planet
      const keysPlanet = Object.keys(schemas.planetSchema.obj);
      // keys que comparten keysPlanet y keyBody
      const keys = keysPlanet.filter((key) => keysBody.includes(key));

      if (keys.length < keysPlanet.length) {
        throw new ClientError(
          'No se proporcionaron las propiedades correctas o hay propiedades faltantes',
          400
        );
      }
      return next();
  }
};
