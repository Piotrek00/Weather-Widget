import "./App.css";

import { useState } from "react";
import axios from "axios";
import { Input, Box, Text } from "@chakra-ui/react";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState(" ");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  // const API_KEY = process.env.REACT_APP_API_KEY;

  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=${1}&appid=a584f3ad71cf0eba751f6f5c24a5161d`;

  const searchLocation = (event) => {
    if (event.key === "Enter")
      axios
        .get(url)
        .then((response) => {
          setData(response.data[0]);
          setLat(response.data[0].lat);
          setLon(response.data[0].lon);
          setCountry(response.data[0].country);
          setState(response.data[0].state);
          console.log(response.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
  };

  const url_weather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a584f3ad71cf0eba751f6f5c24a5161d`;
  const [temperature, setTemperature] = useState(" ");

  axios.get(url_weather).then((res) => {
    setTemperature(res.data.main.temp);
    setCountry(res.data.sys.country);
    console.log(res.data);
  });

  // Convert from Kelvin to Celcius
  const cTemp = Math.round(temperature - 273.15);

  // Convert from Celcius to Farenheit
  const fTemp = Math.round(cTemp * 1.8 + 32);

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
            {cTemp}&deg;C
          </Text>

          <Text fontSize="4xl" as="b">
            {fTemp}&deg;F
          </Text>

          <Text fontSize="lg">
            {location}, {country}
          </Text>

          <Text fontSize="sm">{state}</Text>
        </Box>
      </div>
    </>
  );
}

export default App;
