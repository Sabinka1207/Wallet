const express = require("express");

const router = express.Router();
const controllers = require("../../controllers/users");

router.get("/register", controllers.registerUser);

module.exports = router;