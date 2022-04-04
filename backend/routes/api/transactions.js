const express = require("express");
const {authanticate} = require('../../middlewares/');
const router = express.Router();
const controllers = require('../../controllers/transactions');

router.get("/", authanticate, controllers.gettransactions);
router.get('/categories', controllers.getCategories);

module.exports = router;
