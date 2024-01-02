// Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/CartAction';

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item) => (
            <li key={item._id} className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid rounded-circle"
                  style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
                />
                <div>
                  <strong>{item.name}</strong>
                  <br />
                  <small className="text-muted">{item.category}</small>
                </div>
              </div>
              <div>
                <span className="badge bg-primary rounded-pill me-2">${item.price}</span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemove(item._id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
