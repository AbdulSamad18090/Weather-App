import React from "react";

const Card = ({ text, value, className, forecast }) => {
  console.log(forecast)
  return (
    <div
      className={`flex flex-col justify-center text-center shadow-sm shadow-secondary1 border border-secondary1 rounded-lg p-2 ${className}`}
    >
      <h1 className="flex justify-center text-[30px]">{value}</h1>
      <h1 className=" text-secondary1">{text}</h1>
    </div>
  );
};

export default Card;
