import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Weather from "./Weather";
import Date from "./Date";
import Settings from "./Settings";

const Home = () => {
  const theme = useSelector((state) => state.DarkmodeSlice);
  const { weatherData } = useSelector((state) => state.WeatherSlice);

  return (
    <div
      className={`${theme.isDark ? "bg-primary1" : " bg-secondary3"} ${
        weatherData === null ? "h-screen" : "h-fit md:h-screen"
      } transition-all duration-1000 text-secondary3`}
    >
      <Header />
      <div className="flex justify-between items-center w-full px-4 pt-4 md:px-10 ">
        <Settings />
        <Date />
      </div>
      <Weather />
    </div>
  );
};

export default Home;
