import "./App.css";
// import WeatherBox from "./components/WeatherBox";
// import LocationInput from "./components/LocationInput";
import { useState } from "react";
import axios from "axios";
import { Input, Box, Text } from "@chakra-ui/react";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState(" ");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  // const API_KEY = process.env.REACT_APP_API_KEY;

  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=${1}&appid=`;

  const searchLocation = (event) => {
    if (event.key === "Enter")
      axios
        .get(url)
        .then((response) => {
          setData(response.data[0]);
          setLat(response.data[0].lat);
          setLon(response.data[0].lon);
          console.log(response.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
  };

  console.log(lat);
  console.log(lon);

  const [temperature, setTemperature] = useState("");

  const url_weather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=`;

  // console.log(url_weather);

  return (
    <>
      <div className="App">
        <Input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          variant="outline"
          size="lg"
          placeholder="City Name"
          borderRadius="3xl"
          borderWidth="2px"
          margin="10px"
          textAlign="center"
          boxShadow="lg"
        ></Input>

        <Box
          bg="#F2762E"
          w="100%"
          p={4}
          color="white"
          borderRadius="3xl"
          borderWidth="2px"
          margin="10px"
          display="flex"
          flexDirection="column"
          boxShadow="lg"
        >
          <Text fontSize="4xl" as="b">
            30&deg;
          </Text>
          <Text fontSize="lg">{location}</Text>
          <Text>{data.lat}</Text>
          <Text>{data.lon}</Text>
        </Box>
      </div>
    </>
  );
}

export default App;
