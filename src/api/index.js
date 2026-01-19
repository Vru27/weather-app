import axios from "axios";

const baseURL = "https://api.openweathermap.org/data/2.5/weather";

export async function fetchWeatherData(city) {
  try {
    const response = await axios.get(baseURL, {
      params: {
        q: city,
        appid: import.meta.env.VITE_API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response) {
      throw new Error(
        error.response.data.message || "Failed to fetch weather data",
      );
    } else if (error.code === "ERR_NETWORK") {
      throw new Error("Network error. Please check your connection.");
    } else {
      throw new Error("Something went wrong while fetching weather data");
    }
  }
}
