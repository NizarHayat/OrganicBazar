import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = action.payload;
      return [...state, newTodo];
    },
    deleteTodo: (state, action) => {
      const todoId = action.payload;
      return state.filter((todo) => todo.id !== todoId);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
