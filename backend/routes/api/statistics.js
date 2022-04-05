const express = require('express');

const router = express.Router();
const controllers = require('../../controllers/statistics');

router.get('/:month/:year', controllers.getStatistics);

module.exports = router;
