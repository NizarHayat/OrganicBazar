const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');

router.post("/", controller.store);
router.post("/login", controller.login);
router.get("/getAllUsers", controller.getAllUsers);
router.post("/forgotPassword", controller.forgotPassword);
router.post("/resetOtp", controller.verifyOtp)

module.exports = router;
