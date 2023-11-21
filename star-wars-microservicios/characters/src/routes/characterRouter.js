const { Router } = require('express');
const controller = require('../controller/index');
const middlewares = require('../middlewares');

const characterRouter = Router();

characterRouter.get('/', controller.getCharacter);

characterRouter.post(
  '/',
  middlewares.characterValidation,
  controller.createCharacter
);

module.exports = characterRouter;
