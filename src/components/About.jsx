import React from 'react';

const About = () => {
  return (
    <div className="bg-blue-950 text-gray-100 h-screen flex items-center justify-center">
      <div className="max-w-md p-8 bg-black rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">About Swift Forecast</h2>
        <p className="text-lg mb-4">
        Swift Forecast is a weather application that allows you to fetch real-time weather details from anywhere around the world. Built with React, it provides a simple and intuitive interface to search for the weather conditions in different locations.
        </p>
        <p className="text-lg mb-4">
          This website uses the OpenWeatherMap API to gather weather data. It includes details such as temperature, feels-like temperature, humidity, wind speed, and a brief description of the weather conditions.
        </p>
        <p className="text-lg mb-4">
          Created by Dhruv while learning react.
        </p>
      </div>
    </div>
  );
}

export default About;
