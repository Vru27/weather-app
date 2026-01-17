import axios from "axios";

const baseURL = "https://api.openweathermap.org/data/2.5/weather";

export async function fetchWeatherData(city) {
  const response = await axios.get(baseURL, {
    params: {
      q: city,
      appid: import.meta.env.VITE_API_KEY,
      units: "metric",
    },
  });
  return response.data;
}
