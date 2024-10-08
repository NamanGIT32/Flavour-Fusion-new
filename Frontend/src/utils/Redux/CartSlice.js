import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
      state.items.push(action.payload);
    },
    RemoveItem: (state, action) => {
      // state.items.pop();
      // console.log(action.payload);
      // state.items.filter((temp)=> temp.id == temp.id.includes(action.payload.id));
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.items.splice(index, 1);
        const tempPrice = Math.ceil(
          state.items[index]?.card?.info?.price / 100
        );
        state.totalPrice -= tempPrice;
        if (state.items.length <= 0) {
          state.totalPrice = 0;
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { RemoveItem, clearCart, addItem } = CartSlice.actions;

export default CartSlice.reducer;
