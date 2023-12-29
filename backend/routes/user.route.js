const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller.js');
const authenticateWithToken = require("../middleware/authMiddleware.js");
const roleMiddleware = require("../middleware/roleMiddleware.js");


router.post("/api/user", controller.store);
router.post("/api/user/login", controller.login);
router.get("/users",authenticateWithToken,roleMiddleware,controller.getAllUsers);
router.get("/user/:id", controller.getSingleUser)
router.put("/user/:id", controller.updateUserById)
router.delete("/user/:id", controller.deleteUserById)
router.post("/forgotPassword", controller.forgotPassword);
router.post("/verifyOtp", controller.verifyOtp)

module.exports = router;
