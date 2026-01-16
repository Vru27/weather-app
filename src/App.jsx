import "./App.css";
import Button from "./components/button";
import SearchBar from "./components/searchBar";
import WeatherCard from "./components/weatherCard";

function App() {
  return (
    <>
      <div>
        <h1>Welcome to Weather App</h1>
        <SearchBar value="Search..." onChange={() => {}} />
        <Button text="Search" onClick={() => {}} />
        <WeatherCard />
      </div>
    </>
  );
}

export default App;
