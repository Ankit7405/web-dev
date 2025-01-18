import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    carts: []
}

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);

            if(itemIndex >= 0){
                state.carts[itemIndex].qnty += 1;
            }else{
                const temp = {...action.payload, qnty: 1};
                state.carts = [...state.carts, temp];
            }
        },
        removeToCart: (state, action) => {
            const data = state.carts.filter((ele) => ele.id !== action.payload);
            state.carts = data;
        },
        removeSingleItem: (state, action) => {
            const decIndex = state.carts.findIndex((item) => item.id === action.payload.id);
            if(state.carts[decIndex].qnty >= 1){
                state.carts[decIndex].qnty -= 1;
            }
        },
        emptyCart: (state, action) => {
            state.carts = [];
        }


    }
});

export const { addToCart, removeToCart, removeSingleItem, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
