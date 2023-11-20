const { Router } = require('express');

const router = Router();

router.use('/character', require('./characterRouter'));

module.exports = router;
