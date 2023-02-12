import { Input } from "@chakra-ui/react";
import { useState } from "react";

function LocationInput() {
  const [location, setLocation] = useState("");

  function handleLocation(event) {
    setLocation(event.target.value);
  }

  console.log(handleLocation);

  return (
    <>
      <Input
        value={location}
        onChange={handleLocation}
        variant="outline"
        size="lg"
        placeholder="City Name"
        borderRadius="3xl"
        borderWidth="2px"
        margin="10px"
        textAlign="center"
        boxShadow="lg"
      ></Input>
      <div>{location}</div>
    </>
  );
}

export default LocationInput;
