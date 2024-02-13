import { createSlice } from "@reduxjs/toolkit";

const darkmodeSlice = createSlice({
  name: "DarkmodeSlice",
  initialState: {
    isDarkmode: localStorage.getItem("isDarkmode") === "true",
  },
  reducers: {
    toggleMode: (state, action) => {
      state.isDarkmode = !state.isDarkmode;
      localStorage.setItem("isDarkmode", state.isDarkmode);
    },
  },
});

export default darkmodeSlice.reducer;
export const { toggleMode } = darkmodeSlice.actions;
