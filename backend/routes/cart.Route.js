const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart.Controller.js");


router.post("/api/add", cartController.addToCart);
router.get("/api/:userId", cartController.getCartItems);
router.put("/api/:userId/:productId",cartController.updateCartItemQuantity);
router.delete("/api/:userId/:productId",cartController.removeItemFromCart);





module.exports = router;