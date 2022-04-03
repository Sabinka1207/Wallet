const express = require("express");

const router = express.Router();
const controllers = require("../../controllers/users");

const { authenticate } = require("../../middlewares");

router.post("/register", controllers.register);
router.post("/login", controllers.login);
router.get("/logout", authenticate, controllers.logout);

module.exports = router;
