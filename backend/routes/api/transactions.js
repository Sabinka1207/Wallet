const express = require("express");
const {auth} = require('../../middlewares');



const router = express.Router();
const controllers = require("../../controllers/transactions");

router.get("/", auth, controllers.gettransactions);

module.exports = router;