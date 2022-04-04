const express = require('express');

const router = express.Router();
const controllers = require('../../controllers/transactions');

router.get('/categories', controllers.getCategories);

module.exports = router;
