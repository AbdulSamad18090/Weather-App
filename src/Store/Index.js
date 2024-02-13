import { configureStore } from "@reduxjs/toolkit";
import DarkmodeSlice from "./Slices/DarkmodeSlice";
import WeatherSlice from "./Slices/WeatherSlice";
import UnitSlice from "./Slices/UnitSlice";

const store = configureStore({
  reducer: {
    DarkmodeSlice,
    WeatherSlice,
    UnitSlice,
  },
});

export default store;
