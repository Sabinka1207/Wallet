const express = require("express");
const {authenticate} = require('../../middlewares');
const router = express.Router();
const controllers = require('../../controllers/transactions');

router.get('/', authenticate, controllers.gettransactions);
router.get('/categories', authenticate, controllers.getCategories);

module.exports = router;
