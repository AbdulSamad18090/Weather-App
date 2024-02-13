import { createSlice } from "@reduxjs/toolkit";

const storedIsDark = localStorage.getItem("isDark");
const storedIsLight = localStorage.getItem("isLight");

const darkmodeSlice = createSlice({
  name: "DarkmodeSlice",
  initialState: {
    isDark: storedIsDark === null ? true : JSON.parse(storedIsDark),
    isLight: storedIsLight === null ? false : JSON.parse(storedIsLight),
  },
  reducers: {
    toggleMode: (state, action) => {
      state.isDark = !state.isDark;
      state.isLight = !state.isDark;
      localStorage.setItem("isDark", state.isDark);
      localStorage.setItem("isLight", state.isLight);
    },
  },
});

export default darkmodeSlice.reducer;
export const { toggleMode } = darkmodeSlice.actions;
