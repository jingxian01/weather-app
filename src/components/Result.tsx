import { Box, Flex, VStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimension";
import { OneCallData } from "../types";
import { CurrentWeather } from "./data/CurrentWeather";
import { ForecastWeather } from "./data/ForecastWeather";

interface ResultProps {
  data: OneCallData;
}

export const Result: React.FC<ResultProps> = ({ data }) => {
  const MapWithNoSSR = dynamic(() => import("./map/Map"), {
    ssr: false,
  });
  const { width } = useWindowDimensions();
  console.log("data from result", data);

  return (
    <Box>
      {width <= 768 ? (
        <VStack>
          <Box w="100%" height="200px">
            <MapWithNoSSR position={[data.lat, data.lon]} />
          </Box>
          <Box w="100%">
            <CurrentWeather data={data} />
          </Box>
          <ForecastWeather data={data} isMobile={true} />
        </VStack>
      ) : (
        <Box>
          <Flex>
            <Box w="50%" height="420px">
              <MapWithNoSSR position={[data.lat, data.lon]} />
            </Box>
            <Box w="50%" ml={4}>
              <CurrentWeather data={data} />
            </Box>
          </Flex>
          <Box
            mt={2}
            fontSize="sm"
            textAlign="center"
            fontStyle="italic"
            color="gray.500"
            p={2}
          >
            Scroll down for more
          </Box>
          <ForecastWeather data={data} isMobile={false} />
        </Box>
      )}
    </Box>
  );
};
