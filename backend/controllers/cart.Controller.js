const Cart = require("../models/cart.Model.js");
const User = require("../models/user.model.js");

const cartController = {
    addToCart: async (req, res) => {
      try {
        const { productId, quantity } = req.body;
        const userId = req.user.id; // Assuming you have user authentication middleware
  
        // Check if the product exists
        const product = await Product.findById(productId);
        if (!product) {
          return res.status(404).json({ error: 'Product not found' });
        }
  
        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
  
        // Check if the product is already in the user's cart
        const userCart = await Cart.findOne({ userId });
        const existingProductIndex = userCart.products.findIndex(
          (item) => item.productId.toString() === productId
        );
  
        if (existingProductIndex !== -1) {
          // If the product already exists in the cart, update its quantity
          userCart.products[existingProductIndex].quantity += parseInt(quantity);
        } else {
          // If the product doesn't exist in the cart, add it
          userCart.products.push({ productId, quantity: parseInt(quantity) });
        }
  
        // Save the updated cart
        await userCart.save();
  
        res.status(200).json({ message: 'Product added to cart successfully' });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
      }
    },
  
    // Other cart functions like removeFromCart, updateCart, viewCart can be implemented similarly
  };
  
  module.exports = cartController;