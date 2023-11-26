import React from "react";

const Results = ({ data, loading, error }) => {
  if (!data || !data.weather || data.weather.length === 0) {
    return (
      <div className="mt-10 text-blue-400 font-opensans flex justify-center">
        <p className="text-lg">No weather data available</p>
      </div>
    );
  }

  const kelvinToCelsius = (kelvin) => kelvin - 273.15;
  const temperatureCelsius = kelvinToCelsius(data.main.temp);
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  let temperatureMessage;
  let temperatureColor = temperatureCelsius > 30 ? "text-red-500" : "text-blue-500";

  if (temperatureCelsius < 15) {
    temperatureMessage = "Grab a Sweater!";
  } else if (temperatureCelsius >= 15 && temperatureCelsius < 30) {
    temperatureMessage = "The Weather is Pleasant.";
  } else {
    temperatureMessage = "It's Hot. Stay Hydrated!";
  }

  return (
    <div className="mt-5 text-blue-500 font-opensans mx-auto max-w-md bg-white rounded-lg shadow-lg p-3 h-auto">
      <div className="m-3 flex flex-col space-y-4 text-blue-500">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold text-black border-b-2 border-blue-500">Weather Details</p>
        <img src={iconUrl} alt="Weather-Icon" className="w-16" />
      </div>
        <div className="flex items-center">
          <p className="mr-4 text-lg text-black">Temperature:</p>
          <p className={`text-lg ${temperatureColor}`}>
            {temperatureCelsius.toFixed(2)}°C
          </p>
        </div>
        {temperatureMessage && (
          <p className={`text-lg ${temperatureColor}`}>{temperatureMessage}</p>
        )}
        <div className="flex items-center">
          <p className="mr-4 text-lg text-black">Feels Like:</p>
          <p className="text-lg">
            {kelvinToCelsius(data.main.feels_like).toFixed(2)}°C
          </p>
        </div>
        <div className="flex items-center">
          <p className="mr-4 text-lg text-black">Humidity:</p>
          <p className="text-lg">{data.main.humidity}%</p>
        </div>
        <div className="flex items-center">
          <p className="mr-4 text-lg text-black">Description:</p>
          <p className="text-lg capitalize">{data.weather[0].description}</p>
        </div>
        <div className="flex items-center">
          <p className="mr-4 text-lg text-black">Wind Speed:</p>
          <p className="text-lg">{data.wind.speed} m/sec</p>
        </div>
      </div>
    </div>
  );
};

export default Results;
