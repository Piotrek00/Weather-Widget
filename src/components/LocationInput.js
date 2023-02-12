import { Input } from "@chakra-ui/react";

function LocationInput() {
  return (
    <Input
      variant="outline"
      size="lg"
      placeholder="City Name"
      borderRadius="3xl"
      borderWidth="2px"
      margin="10px"
    ></Input>
  );
}

export default LocationInput;
