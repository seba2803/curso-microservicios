const { Router } = require('express');
const controllers = require('../controllers');
const middleware = require('../middleware');

const router = Router();

router.get('/:model', middleware.validateModel, controllers.getAllInfo);

router.get('/:model/:id', middleware.validateModel, controllers.getOnlyOne);

module.exports = router;
