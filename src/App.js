import "./App.css";
// import WeatherBox from "./components/WeatherBox";
// import LocationInput from "./components/LocationInput";
import { useState } from "react";
import axios from "axios";
import { Input, Box, Text } from "@chakra-ui/react";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState(" ");

  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=${1}&appid=a584f3ad71cf0eba751f6f5c24a5161d

  `;

  const searchLocation = (event) => {
    if (event.key === "Enter")
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
  };

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
          <Text fontSize="lg">{data.lat}</Text>
        </Box>
      </div>
    </>
  );
}

export default App;
