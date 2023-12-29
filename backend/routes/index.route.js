const express = require('express');
const router = express.Router();
const contactRoute = require('./contact.route');
const userRoute = require('./user.route');
const emailRoute = require('./email.route');
const imageRoute = require('./image.route');
const productRoute = require('./product.route');
const cartRoute = require("../routes/cart.Route.js");


router.use("/contact", contactRoute);
router.use("/user", userRoute);
router.use("/email", emailRoute);
router.use('/uploads', imageRoute);

// Ensure that the '/products/:id' route is defined after '/products'
router.use('/', productRoute);
router.use('/', cartRoute);




module.exports = router;
