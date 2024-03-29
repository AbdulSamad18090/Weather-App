import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Radio, Switch } from "@material-tailwind/react";
import { toggleUnit } from "../Store/Slices/UnitSlice";
import { toggleMode } from "../Store/Slices/DarkmodeSlice";

const Settings = () => {
  const theme = useSelector((state) => state.DarkmodeSlice);
  const [showDropdown, setShowDropdown] = useState(false);
  const unitData = useSelector((state) => state.UnitSlice);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative">
      {showDropdown ? (
        <IoMdClose
          className={` text-secondary1 text-[25px] cursor-pointer transition-all duration-1000`}
          onClick={toggleDropdown}
        />
      ) : (
        <IoSettingsOutline
          className={` text-secondary1 text-[25px] hover:animate-spin cursor-pointer transition-all duration-1000`}
          onClick={toggleDropdown}
        />
      )}
      {showDropdown && (
        <div
          className={`absolute top-8 w-[200px] z-50 ${
            theme.isDark
              ? "bg-primary3 shadow-sm shadow-secondary1"
              : "bg-secondary2 text-primary3 shadow-sm shadow-secondary1"
          } p-2 rounded shadow transition-all duration-1000`}
        >
          <h1 className="flex items-center pb-2">
            <span>
              <IoSettingsOutline className="mr-2" />
            </span>
            Units
          </h1>
          <hr className="border-secondary1" />
          <ul>
            <Radio
              name="unit"
              color="red"
              label="Celsius"
              defaultChecked={unitData.isCelcius}
              onChange={() => {
                dispatch(toggleUnit());
              }}
            />
            <Radio
              name="unit"
              color="red"
              label="Fahrenheit"
              defaultChecked={unitData.isFahren}
              onChange={() => {
                dispatch(toggleUnit());
              }}
            />
          </ul>
          <h1 className="flex items-center pb-2">
            <span>
              <IoSettingsOutline className="mr-2" />
            </span>
            Color Mode
          </h1>
          <hr className="border-secondary1" />
          <ul className="flex flex-col">
            <Radio
              name="theme"
              color="red"
              label="Dark"
              defaultChecked={theme.isDark}
              onChange={() => {
                dispatch(toggleMode());
              }}
            />
            <Radio
              name="theme"
              color="red"
              label="Light"
              defaultChecked={theme.isLight}
              onChange={() => {
                dispatch(toggleMode());
              }}
            />
          </ul>
        </div>
      )}
    </div>
  );
};

export default Settings;
