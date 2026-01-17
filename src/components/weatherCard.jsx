import { CloudRain, Wind, Droplets, Eye, Gauge } from "lucide-react";

const WeatherCard = ({ data }) => {
  const iconUrl = "https://openweathermap.org/img/wn/";

  if (!data) {
    return <p className="text-lg">Get the latest weather information here!</p>;
  }

  const {
    name,
    sys: { country },
    visibility,
    weather,
    main: { temp, humidity, pressure, feels_like },
    wind: { speed },
    clouds: { all: cloudiness },
  } = data;

  return (
    <div>
        <div className="bg-linear-to-br from-blue-500 via-purple-500 to-orange-400 dark:from-blue-600 dark:via-purple-600 dark:to-orange-500 p-8 text-white">
          <h2 className="text-2xl font-bold mb-1">{name}</h2>
          <p className="text-blue-100">{country}</p>
        </div>

        <div className="px-8 py-10 border-b border-gray-100 dark:border-gray-700 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative w-32 h-32 bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center shadow-lg">
                <img
            className="inline-block items-center justify-center"
            src={`${iconUrl}${weather[0]?.icon}@2x.png`}
            alt="Weather Icon"
          />
              </div>
            </div>

            <div className="mb-2">
              <div className="text-5xl font-bold text-gray-900 dark:text-white mb-1">{temp}°C</div>
              <p className="text-gray-600 dark:text-gray-400">Feels like {feels_like}°C</p>
            </div>
          </div> 

          <div className="px-8 py-8 grid grid-cols-2 gap-4">
            <div className="bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl p-4 border border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Droplets className="w-5 h-5 text-blue-500 dark:text-blue-300" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Humidity</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{humidity}%</p>
            </div>

            <div className="bg-linear-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-2xl p-4 border border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <Wind className="w-5 h-5 text-purple-500 dark:text-purple-300" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Wind Speed</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{speed} m/s</p>
            </div>

            <div className="bg-linear-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-2xl p-4 border border-orange-200 dark:border-orange-700">
              <div className="flex items-center gap-2 mb-2">
                <Gauge className="w-5 h-5 text-orange-500 dark:text-orange-300" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Pressure</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{pressure} hPa</p>
            </div>

            <div className="bg-linear-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/30 dark:to-cyan-800/30 rounded-2xl p-4 border border-cyan-200 dark:border-cyan-700">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-cyan-500 dark:text-cyan-300" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Visibility</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{visibility} km</p>
            </div>
          </div>

        <div className="px-8 py-6 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CloudRain className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Cloudiness</span>
              </div>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{cloudiness}%</p>
            </div>
          </div>
    </div>
  );
};

export default WeatherCard;
