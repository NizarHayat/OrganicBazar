const express = require('express');
const router = express.Router();
const controller = require('../controllers/email.controller.js');

router.post("/", controller.store);

module.exports = router;
