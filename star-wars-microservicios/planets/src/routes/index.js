const { Router } = require('express');

const router = Router();

router.use(require('./planetRouter'));

module.exports = router;
