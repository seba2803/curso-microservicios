const { Router } = require('express');
const controller = require('../controller/index');

const planetRouter = Router();

planetRouter.get('/', controller.getPlanets);

module.exports = planetRouter;
