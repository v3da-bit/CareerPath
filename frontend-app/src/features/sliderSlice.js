import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuOpen: true,
};

export const sliderSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    checkMenu: (state, action) => {
      state.menuOpen = action.payload; 
    },
  },
});

export const { checkMenu } = sliderSlice.actions;

export default sliderSlice.reducer;