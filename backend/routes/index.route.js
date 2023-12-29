const express = require('express');
const router = express.Router();
const contactRoute = require('./contact.route.js');
const userRoute = require('./user.route.js');
const emailRoute = require('./email.route.js');
const imageRoute = require('./image.route.js');
const productRoute = require('./product.route.js');
const cartRoute = require("../routes/cart.Route.js");


router.use("/contact", contactRoute);
router.use("/", userRoute);
router.use("/email", emailRoute);
router.use('/uploads', imageRoute);

// Ensure that the '/products/:id' route is defined after '/products'
router.use('/', productRoute);
router.use('/', cartRoute);




module.exports = router;
