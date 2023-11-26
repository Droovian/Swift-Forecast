import axios from "axios";
import { useState, useEffect } from "react";
import Results from "./Results";
const Search = () => {
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

    const [location, setLocation] = useState();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    const findLocation = async() => {
        setLoading(true);
        setError(null);

        await axios
        .get(url)
        .then((res) => {
            setData(res.data);
            console.log(res.data);
        })
        .catch((err)=> {
            alert(err);
            setError(err.message || 'An Error Occured!');
        })
        .finally(()=> {
            setLoading(false);
        });
    };
    return ( 
        <div className="bg-blue-950 w-full h-screen">
            <div className="flex justify-center p-3 sm:w-1/2 sm:mx-auto">
                <div className="flex flex-col space-y-7 text-gray-100 font-opensans">
                        <h1 className="text-2xl font-bold mt-5">Enter a Location (City Name)</h1>
                        <input type="text" className="h-10 bg-blue-300 text-black p-3 rounded-md
                        outline-none" 
                        value={location}
                        onChange={(e)=> {setLocation(e.target.value)}}
                        />
                        {loading ? (
                    <p className="mx-auto">Searching...</p>
                ) : error ? (
                    <p className="mx-auto text-red-500">{error}</p>
                ) : data.name ? (
                    <p className="mx-auto">Found</p>
                ) : null}
                <button
                    onClick={findLocation}
                    className="px-3 py-2 border border-white w-1/2 mx-auto hover:bg-blue-500"
                >
            Submit
          </button>
        </div>
      </div>
      {
        loading === false && <Results data={data} loading={loading} error={error} />
      }
    </div>
  );
};
 
export default Search;