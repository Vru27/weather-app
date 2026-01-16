const baseURL = "https://api.openweathermap.org/data/2.5/weather";
export async function fetchWeatherData(city) {
  const response = await fetch(
    `${baseURL}?q=${city}&appid=${import.meta.env.VITE_API_KEY}`
  );
  return await response.json();
}
