const { Router } = require('express');

const router = Router();

router.use(require('./characterRouter'));

module.exports = router;
