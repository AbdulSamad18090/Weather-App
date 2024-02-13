import { useSelector } from "react-redux";
import Card from "./Card";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Map from "./Map";

const Weather = () => {
  const { weatherData, loading, error } = useSelector(
    (state) => state.WeatherSlice
  );
  const theme = useSelector((state) => state.DarkmodeSlice);
  console.log(weatherData);
  const unitData = useSelector((state) => state.UnitSlice);

  const [latLon, setLatLon] = useState({ lat: null, long: null });

  // Effect to update latitude and longitude when weather data changes
  useEffect(() => {
    if (weatherData && weatherData.location) {
      const { lat, lon } = weatherData.location;
      setLatLon({ lat, long: lon });
    }
  }, [weatherData]);

  return (
    <div
      className={`grid md:grid-cols-2 grid-cols-1 gap-2 md:px-10 p-4 ${
        weatherData === null && error !== null ? "h-fit" : "h-[70%]"
      }`}
    >
      <div
        className={`${
          theme.isDark ? "" : "text-primary2"
        } shadow-sm shadow-secondary1 border border-secondary1 p-2 rounded-lg`}
      >
        {loading || error !== null || !weatherData ? (
          <div className=" w-full h-full flex text-center items-center justify-center text-2xl text-secondary1">
            {weatherData === null ? (
              <div className=" flex flex-col justify-center items-center">
                <img
                  src="/images/Animation - 1707659641373.gif"
                  alt="img"
                  width={"100px"}
                />
                <p>Search location</p>
              </div>
            ) : error !== null ? (
              <div className=" flex flex-col justify-center items-center">
                <img
                  src="/images/Animation - 1707656489767.gif"
                  alt="img"
                  width={"100px"}
                />
                <p>Feals like you searching for wrong location</p>
              </div>
            ) : (
              <Loader isSearching={true} />
            )}
          </div>
        ) : (
          <div className=" relative">
            <h1
              className={`font-bold text-4xl ${
                theme.isDark ? "text-secondary2" : "text-secondary1"
              } `}
            >{`${weatherData.location.name}`}</h1>
            <p
              className={`${
                theme.isDark ? "text-secondary1" : "text-secondary1"
              } text-secondary1`}
            >{`${weatherData.location.region}, ${weatherData.location.country}`}</p>
            <div className=" mb-4">
              {weatherData !== null ? (
                <div className=" text-center">
                  <div className=" flex justify-center items-center">
                    <img
                      src={weatherData.current.condition.icon}
                      alt="img"
                      width={"100px"}
                    />

                    <h1 className=" text-[3.5rem]">
                      {unitData.isCelcius
                        ? `${weatherData.current.temp_c}°C`
                        : `${weatherData.current.temp_f}°F`}
                    </h1>
                  </div>
                  <p>{weatherData.current.condition.text}</p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="">
              {latLon.lat && latLon.long && (
                <Map
                  key={`${latLon.lat}-${latLon.long}`}
                  lat={latLon.lat}
                  lng={latLon.long}
                />
              )}
            </div>
          </div>
        )}
      </div>
      {weatherData !== null && error === null ? (
        <div
          className={`${
            theme.isDark ? "" : "text-primary2"
          } grid grid-cols-2 gap-2`}
        >
          <Card
            text={"Feals Like"}
            value={
              unitData.isCelcius
                ? `${weatherData.current.feelslike_c}°C`
                : `${weatherData.current.feelslike_f}°F`
            }
          />
          <Card text={"Mumidity"} value={`${weatherData.current.humidity}%`} />
          <Card text={"UV-index"} value={weatherData.current.uv} />
          <Card text={"Wind"} value={`${weatherData.current.wind_kph} kph`} />
          <Card
            text={"Forcast"}
            value={`hour by hour future weather `}
            className={"rounded-lg col-span-2"}
            forecast={weatherData.forecast.forecastday[0]}
          />
        </div>
      ) : (
        <div className={`${theme.isDark ? "" : "text-primary2"}`}>
          <div className=" w-full h-full flex flex-col justify-center items-center">
            <img src="/images/Animation - waiting.gif" alt="" width={"100px"} />
            <p>Waiting for data...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
