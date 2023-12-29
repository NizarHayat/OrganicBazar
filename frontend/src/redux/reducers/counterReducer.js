import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  cart: [], // Array to store items in the cart
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1;
    },
    decrement: (state, action) => {
      state.count = state.count - 1;
    },
    addToCart: (state, action) => {
      // Assuming the payload contains the item to add
      state.cart.push(action.payload);
    },
  },
});

export const { increment, decrement, addToCart } = counterSlice.actions;
export default counterSlice.reducer;
// import {createSlice} from "@reduxjs/toolkit"

// const initialState={
//     count:0,

// }

// const counterSlice=createSlice({
//     name:"counter",
//     initialState,
//     reducers:{
//         increment:(state, payload)=>{
//             state.count=state.count+1;

//         },
//         decrement:(state)=>{
//             state.count=state.count-1;
//         }
//     }
// })

// export const {increment, decrement}=counterSlice.actions;
// export default counterSlice.reducer;

// //action creators and reducers