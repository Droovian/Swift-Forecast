import axios from "axios";
import Typewriter from 'typewriter-effect';
import search from "./search";
import { Link } from "react-router-dom";
import worldmap from '../assets/world-map-svgrepo-com.png';

const description = 'Get real-time weather details from anywhere around the world...';

const Home = () => {
  return ( 
    <div className="bg-blue-950 w-screen h-screen text-gray-100 flex items-center justify-center">
      <div className="container mx-auto flex flex-col sm:flex-row">
        <div className="max-w-screen-md px-4 sm:px-8 flex flex-col items-center sm:items-start justify-center">
          <h1 className="text-4xl font-opensans mb-4 sm:mb-8 text-center sm:text-left">Welcome to Swift Forecast</h1>
          <p className="font-opensans mt-3 sm:mt-4 text-center sm:text-left">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString(description)
                  .callFunction(() => {
                    console.log('String typed out!');
                  })
                  .pauseFor(2500)
                  .start();
              }}
            />
          </p>
          <Link to='/search' className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 block mx-auto sm:mx-0">
            Get Started
          </Link>
        </div>
        <div className="hidden sm:block mx-auto">
          <img src={worldmap} alt="World Map" className="max-h-full sm:max-w-xl" />
        </div>
      </div>
    </div>
  );
}

export default Home;
