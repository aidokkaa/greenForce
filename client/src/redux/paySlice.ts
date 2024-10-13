import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const paySlice = createSlice({
  name: 'pay',
  initialState,
  reducers: {
    addPay: (state, action) => {
        console.log(action)
      return action.payload;
    },
  },
});

export const { addPay } = paySlice.actions;
export default paySlice.reducer;