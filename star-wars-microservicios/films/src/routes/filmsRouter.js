const { Router } = require('express');
const controller = require('../controller/index');

const filmsRouter = Router();

filmsRouter.get('/', controller.getFilms);

module.exports = filmsRouter;
