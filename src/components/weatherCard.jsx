const WeatherCard = ({ data }) => {
  const iconUrl = "https://openweathermap.org/img/wn/";

  if (!data) {
    return <p className="text-lg">Get the latest weather information here!</p>;
  }

  const {
    name,
    sys: { country },
    weather,
    main: { temp, humidity, pressure },
    wind: { speed },
    clouds: { all: cloudiness },
  } = data;

  return (
    <div>
      {data && (
        <div className="bg-linear-to-br from-blue-500 via-purple-500 to-orange-400 dark:from-blue-600 dark:via-purple-600 dark:to-orange-500 p-8 text-white">
          <h2 className="text-2xl font-bold mb-1">{name}</h2>
          <p className="text-blue-100">{country}</p>

          <img
            className="inline-block items-center justify-center"
            src={`${iconUrl}${weather[0]?.icon}@2x.png`}
            alt="Weather Icon"
          />
          <p className="text-xl">{temp}°C</p>
          <p>{weather[0]?.description}</p>
          <p>Humidity: {humidity}%</p>
          <p>Wind Speed: {speed} m/s</p>
          <p>Pressure: {pressure} hPa</p>
          <p>Cloudiness: {cloudiness}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
