import {createSlice} from "@reduxjs/toolkit"

const initialState={
    count:0,

}

const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state, payload)=>{
            state.count=state.count+1;

        },
        decrement:(state)=>{
            state.count=state.count-1;
        }
    }
})

export const {increment, decrement}=counterSlice.actions;
export default counterSlice.reducer;

//action creators and reducers