const { Router } = require('express');

const router = Router();

router.use('/film', require('./filmsRouter'));

module.exports = router;
