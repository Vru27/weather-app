import "./App.css";
import Button from "./components/button";
import SearchBar from "./components/searchBar";
import WeatherCard from "./components/weatherCard";

function App() {
  return (
    <>
      <div className="select-none">
        <h1 className="text-2xl font-bold">Weather App</h1>
        <SearchBar placeholder="Search City..." onChange={() => {}} />
        <Button text="Search" onClick={() => {}} />
        <WeatherCard />
      </div>
    </>
  );
}

export default App;
