const express = require('express');
const router = express.Router();
const contactRoute = require("./contact.route.js");
const userRoute = require("./user.route.js");
const Email = require('./email.route.js');
const imageRoute = require('./image.route.js'); 

router.use("/contact", contactRoute);
router.use("/user", userRoute);
router.use("/email", Email);
router.use('/uploads', imageRoute);


module.exports = router;
