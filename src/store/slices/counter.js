import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counterValue: 0,
    maxCounter: 200,
  },
  reducers: {
    incrementByOne: (state, action) => {
      state.counterValue = action.payload;
    },
    decrementByOne: (state, action) => {
      state.counterValue = action.payload;
    },
    incrementByCount: (state, action) => {
      state.counterValue = state.counterValue + action.payload;
    },
    reset: (state) => {
      state.counterValue = 0;
    },
  },
});

export const { incrementByOne, decrementByOne, incrementByCount, reset } =
  counterSlice.actions;
export default counterSlice.reducer;
