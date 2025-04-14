import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items:[]
    },
    reducers:{
    addItem: (state, action) => {

        //mutating
        state.items.push(action.payload)

    },
    remooveItem: (state)=> {
        state.items.pop()

    },
    clearCart:(state) => {
        state.items.length = 0; //[]

    } ,
    }
})

export const {addItem, remooveItem,  clearCart} =cartSlice.actions

export default cartSlice.reducer