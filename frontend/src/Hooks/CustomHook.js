// CustomHook.js
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/CartAction';

export const useCart = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };

  return { addToCartHandler };
};
