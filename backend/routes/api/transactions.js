const express = require('express');

const router = express.Router();
const controllers = require('../../controllers/transactions');

router.get('/statistics', controllers.getCategories);

module.exports = router;
