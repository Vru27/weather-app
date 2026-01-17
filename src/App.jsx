import { fetchWeatherData } from "./api";
import "./App.css";
import Button from "./components/button";
import ErrorMessage from "./components/errorMessage";
import SearchBar from "./components/searchBar";
import WeatherCard from "./components/weatherCard";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    // Fetch weather data based on the city
    if (!city) {
      setError("Please enter a city name!");
      setWeatherData(null);
      return;
    }
    setWeatherData(null);
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    } catch (err) {
      setError("City not found. Please try again.");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="select-none min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-orange-50 dark:from-blue-950 dark:via-purple-950 dark:to-orange-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-orange-500 dark:from-blue-300 dark:via-purple-300 dark:to-orange-300 bg-clip-text text-transparent mb-2">
              Weather App
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Real-time weather conditions
            </p>
          </div>
          <div className="mb-8">
           <div className="flex gap-2">
            <SearchBar
              placeholder="Search location..."
              onChange={(e) => setCity(e.target.value)}
            />
            <Button
              text={loading ? "Loading..." : "Search"}
              onClick={handleSearch}
            />
          </div>
          {error && <div className="mt-2"><ErrorMessage message={error} /></div>}
          </div>
          <div className="rounded-3xl bg-white dark:bg-gray-800 shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
            <WeatherCard data={weatherData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
