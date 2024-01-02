// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer';
import todoReducer from './reducers/todoReducer';
import { cartReducer } from './reducers/CartReducer';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    cartReducer: cartReducer, 
  },
});

export default store;
