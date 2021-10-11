import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {  
      const item = state.items.findIndex(item => item.id === action.payload.id)
      if (item >= 0){
        state.items[item].quantity++
      }
      else{            
        Object.assign(action.payload, {quantity:1})
        state.items = [...state.items, action.payload]
      }
    },
    removeFromBasket: (state, action) => {
      const newBasket = state.items.filter(item => item.id !== action.payload.id)
      state.items = newBasket
    },
    updateBasket: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id)

      state.items[index].quantity = action.payload.quantity
    },
  },
});

export const { addToBasket, removeFromBasket, updateBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
