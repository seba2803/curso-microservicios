const { Router } = require('express');

const router = Router();

router.use(require('./filmsRouter'));

module.exports = router;
