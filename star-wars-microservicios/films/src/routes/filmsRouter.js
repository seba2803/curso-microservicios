const { Router } = require('express');
const controller = require('../controller/index');
const middlewares = require('../middlewares');

const filmsRouter = Router();

filmsRouter.get('/', controller.getAllFilms);

filmsRouter.get('/:id', middlewares.validateId, controller.getFilm);

filmsRouter.post('/', controller.createFilm);

module.exports = filmsRouter;
