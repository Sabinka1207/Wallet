const express = require('express');

const router = express.Router();
const controllers = require('../../controllers/statistics');

router.get('/', controllers.getStatistics);

module.exports = router;
