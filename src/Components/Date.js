import React from "react";
import { useSelector } from "react-redux";

const DateComponent = () => {
  const theme = useSelector((state) => state.DarkmodeSlice);

  // Get current date
  const currentDate = new Date();

  // Get day, month, and year
  const day = currentDate.getDate();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  // Format the date string
  const formattedDate = `${day} ${month} ${year}`;

  return (
    <div
      className={`font-bold ${
        theme.isDarkmode ? "text-secondary2" : "text-secondary1"
      } sm:text-2xl text-lg`}
    >
      {formattedDate}
    </div>
  );
};

export default DateComponent;
