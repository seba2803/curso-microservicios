const { Router } = require('express');
const controller = require('../controller/index');
const middlewares = require('../middlewares');

const planetRouter = Router();

planetRouter.get('/', controller.getAllPlanets);

planetRouter.get('/:id', middlewares.validateId, controller.getPlanet);

planetRouter.post('/', controller.createPlanet);

module.exports = planetRouter;
