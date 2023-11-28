const { Router } = require('express');
const controller = require('../controller/index');
const middlewares = require('../middlewares');

const characterRouter = Router();

characterRouter.get('/', controller.getAllCharacters);

characterRouter.get('/:id', middlewares.validateId, controller.getCharacter);

characterRouter.post('/', controller.createCharacter);

module.exports = characterRouter;
