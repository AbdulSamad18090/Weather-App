import React from "react";
import { useSelector } from "react-redux";

const Card = ({ text, value, className, forecast }) => {
  const unitData = useSelector((state) => state.UnitSlice);
  // Check if the forecast object exists
  if (!forecast) {
    return (
      <div
        className={`flex flex-col justify-center text-center shadow-sm shadow-secondary1 border border-secondary1 rounded-lg p-2 ${className}`}
      >
        <h1 className="flex justify-center text-[30px]">{value}</h1>
        <h1 className="text-secondary1">{text}</h1>
      </div>
    );
  }

  // Destructure properties from the forecast object
  const { hour } = forecast;
  //console.log(forecast);

  const convertToAMPM = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    let period = "AM";
    let hours12 = parseInt(hours, 10);
    if (hours12 >= 12) {
      period = "PM";
      if (hours12 > 12) hours12 -= 12;
    }
    if (hours12 === 0) hours12 = 12;
    return `${hours12}:${minutes} ${period}`;
  };

  return (
    <div
      className={`flex flex-col justify-center text-center shadow-sm shadow-secondary1 border border-secondary1 rounded-lg p-2 ${className}`}
    >
      <h1 className="text-secondary1 pb-2">{text}</h1>
      <div className="flex overflow-x-auto">
        {hour.map((hourData, i) => (
          <div
            className="flex flex-col justify-center items-center border border-secondary1 mx-1 p-1 rounded min-w-[120px] px-2"
            key={i}
          >
            <h1>{hourData.condition.text}</h1>
            <img src={hourData.condition.icon} alt="icon" />
            {/* <h1>{hourData.temp_c}°C</h1> */}
            {unitData.isCelcius
              ? `${hourData.temp_c}°C`
              : `${hourData.temp_f}°F`}
            <p>{convertToAMPM(hourData.time.split(" ")[1])}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
