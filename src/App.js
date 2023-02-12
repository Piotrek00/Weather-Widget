import { useState } from "react";
import "./App.css";
import LocationInput from "./components/LocationInput";
import WeatherBox from "./components/WeatherBox";

function App() {
  return (
    <div className="App">
      <LocationInput />
      <WeatherBox />
    </div>
  );
}

export default App;
