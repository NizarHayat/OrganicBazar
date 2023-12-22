const express = require('express');
const router = express.Router();
const contactRoute = require("./contact.route");
const userRoute = require("./user.route");
const Email = require('./email.route');
const imageRoute = require('./image.route'); 

router.use("/contact", contactRoute);
router.use("/user", userRoute);
router.use("/email", Email);
router.use('/uploads', imageRoute);


module.exports = router;
