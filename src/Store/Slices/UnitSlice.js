import { createSlice } from "@reduxjs/toolkit";

const unitSlice = createSlice({
  name: "UnitSlice",
  initialState: {
    isCelcius: localStorage.getItem("isCelcius") === "true" || true,
    isFahren: localStorage.getItem("isFahren") === "true" || false,
  },
  reducers: {
    toggleUnit: (state, action) => {
      state.isCelcius = !state.isCelcius;
      state.isFahren = !state.isFahren;
      localStorage.setItem("isCelcius", state.isCelcius);
      localStorage.setItem("isFahren", state.isFahren);
    },
  },
});

export default unitSlice.reducer;
export const { toggleUnit } = unitSlice.actions;
