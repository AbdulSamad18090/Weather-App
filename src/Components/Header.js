import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaCloudSunRain } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../Store/Slices/WeatherSlice";

const Header = () => {
  const theme = useSelector((state) => state.DarkmodeSlice);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search !== "") {
      dispatch(getWeather(search));
      setSearch("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    handleSearch();
  };

  return (
    <header
      className={`${
        theme.isDark ? "bg-primary2" : " bg-secondary2"
      } transition-all duration-1000 p-2 md:px-10 px-4 flex justify-between items-center`}
    >
      <div className="flex items-center">
        <FaCloudSunRain
          className={`${theme.isDark ? "" : "text-primary3"} text-[30px]`}
        />
        <h1
          className={`${
            theme.isDark ? "" : "text-primary3"
          } font-semibold mx-2 sm:block hidden`}
        >
          Weather.Io
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center border border-secondary1 p-2 rounded-md"
      >
        <CiLocationOn className=" text-red-500" />
        <input
          type="text"
          placeholder="Search location..."
          className={`${
            theme.isDark ? "" : "text-primary3 placeholder:text-primary3"
          } bg-transparent text-sm mx-2 focus:outline-none`}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <AiOutlineSend
          type="submit"
          className={`${theme.isDark ? "" : "text-primary3"} ${
            search === "" ? "text-secondary1" : "text-red-500 cursor-pointer"
          }`}
          onClick={handleSearch}
        />
      </form>
    </header>
  );
};

export default Header;
