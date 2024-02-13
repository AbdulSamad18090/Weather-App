import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getWeather = createAsyncThunk("weather", async (city) => {
  const res = await axios.get(
    `https://api.weatherapi.com/v1/forecast.json?key=2b30494657b64297acb122934241002&q=${city}&days=1&aqi=no&alerts=no`
  );
  return res.data;
});

const weatherSlice = createSlice({
  name: "WeatherSlice",
  initialState: {
    weatherData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.weatherData = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
