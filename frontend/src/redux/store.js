import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer';
import todoReducer from './reducers/todoReducer';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
});

export default store;
