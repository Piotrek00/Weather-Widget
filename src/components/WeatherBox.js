import { Box, Text } from "@chakra-ui/react";

function WeatherBox({ location }) {
  return (
    <div>
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
      </Box>
    </div>
  );
}

export default WeatherBox;
