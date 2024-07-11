import React, { useEffect, useState } from "react";
import WeatherSummery from "../components/WeatherSummery";
import WeatherDays from "../components/WeatherDays";

const fetchCordinates = (setLatitude,setLongitude) => {
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      setLatitude(coords.latitude)
      setLongitude(coords.longitude)
    },
    (err) => console.log(err)
  );
};

function WeatherPage() {

  const [latitude,setLatitude]=useState(0);
  const [longitude,setLongitude]=useState(0);
  useEffect(() => {
    fetchCordinates(setLatitude,setLongitude);
  }, []);


  return (
    <div className="flex w-[80%] flex-col items-center justify-center border mx-auto bg-gray-700 rounded-lg p-5 text-white">
      <h1 className="text-3xl font-semibold">Weather Page</h1>
      <div className="w-full text-right px-4">
        <button
          className="rounded px-5 text-xl font-semibold bg-gray-400"
          onClick={() => {
            console.log("Button clicked");
          }}
        >
          °F
        </button>
      </div>
      <WeatherSummery />
      <WeatherDays />
      <div>
        <div>Latitude:{latitude}</div>
        <div>Longitude:{longitude}</div>
      </div>
    </div>
  );
}

export default WeatherPage;