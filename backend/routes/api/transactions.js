const express = require("express");
const {auth} = require('../../middlewares/auth');



const router = express.Router();
const controllers = require("../../controllers/transactions");

router.get("/", auth, controllers.gettransactions);

module.exports = router;