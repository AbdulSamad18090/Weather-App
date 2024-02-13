import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { Switch } from "@material-tailwind/react";
import { toggleMode } from "../Store/Slices/DarkmodeSlice";
import Weather from "./Weather";
import Date from "./Date";
import Settings from "./Settings";

const Home = () => {
  const theme = useSelector((state) => state.DarkmodeSlice);
  const { weatherData } = useSelector((state) => state.WeatherSlice);
  const dispatch = useDispatch();

  return (
    <div
      className={`${theme.isDarkmode ? "bg-primary1" : " bg-secondary3"} ${
        weatherData === null ? "h-screen" : "h-fit md:h-screen"
      } transition-all duration-1000 text-secondary3`}
    >
      <Header />
      <div className="flex justify-between items-center w-full px-4 pt-4 md:px-10 ">
        <Settings />
        <Date />
        <Switch
          color="red"
          label="Dark Mode"
          defaultChecked={theme.isDarkmode}
          onChange={() => {
            dispatch(toggleMode(!theme.isDarkmode));
          }}
        />
      </div>
      <Weather />
    </div>
  );
};

export default Home;
