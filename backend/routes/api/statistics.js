const express = require('express');

const router = express.Router();
const controllers = require('../../controllers/statistics');
// const {statValid} = require ("../../middlewares/statValid")

router.get('/', controllers.getStatistics);

module.exports = router;
