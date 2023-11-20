const { Router } = require('express');

const router = Router();

router.use('/planet', require('./planetRouter'));

module.exports = router;
