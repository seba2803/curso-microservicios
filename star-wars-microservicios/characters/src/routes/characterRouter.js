const { Router } = require('express');
const controller = require('../controller/index');

const characterRouter = Router();

characterRouter.get('/', controller.getCharacter);

module.exports = characterRouter;
