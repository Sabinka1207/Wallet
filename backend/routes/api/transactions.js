const express = require('express');

const router = express.Router();
const controllers = require('../../controllers/transactions');

router.get('/categories', controllers.getCategories);

router.post('/transactions', controllers.addNewTransaction);

module.exports = router;
