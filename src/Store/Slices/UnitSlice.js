import { createSlice } from "@reduxjs/toolkit";

const storedIsCelcius = localStorage.getItem("isCelcius");
const storedIsFahren = localStorage.getItem("isFahren");

const unitSlice = createSlice({
  name: "UnitSlice",
  initialState: {
    isCelcius:
      storedIsCelcius === null ? true : JSON.parse(storedIsCelcius), // Parse the retrieved value
    isFahren:
      storedIsFahren === null ? false : JSON.parse(storedIsFahren), // Parse the retrieved value
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
