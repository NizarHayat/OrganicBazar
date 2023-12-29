const Cart = require("../models/cart.Model.js");



// Controller function to add a product to the cart
exports.addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [{ productId, quantity }] });
      await cart.save();
    } else {
      const itemExists = cart.items.find(item => item.productId.equals(productId));

      if (itemExists) {
        itemExists.quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }

      await cart.save();
    }

    res.status(200).json({ message: 'Product added to cart successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add product to cart' });
  }
};

// Get cart items 
exports.getCartItems = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOne({ userId }).populate('items.productId');

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get cart items' });
  }
};

// Update cart items
exports.updateCartItemQuantity = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const cartItem = cart.items.find(item => item.productId === productId);

    if (!cartItem) {
      return res.status(404).json({ message: 'Item not found in the cart' });
    }

    cartItem.quantity = quantity;
    await cart.save();

    res.status(200).json({ message: 'Cart item quantity updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update cart item quantity' });
  }
};
// Remove cart item 

exports.removeItemFromCart = async (req, res) => {
  const { userId, productId } = req.params;

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = cart.items.filter(item => item.productId !== productId);
    await cart.save();

    res.status(200).json({ message: 'Item removed from cart successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to remove item from cart' });
  }
};