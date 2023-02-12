import { Box } from "@chakra-ui/react";

function WeatherBox() {
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
      >
        Tu bedzie Switch i pogoda
      </Box>
    </div>
  );
}

export default WeatherBox;
