import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimension";
import { OneCallData } from "../types";
import { CurrentWeather } from "./data/CurrentWeather";

interface ResultProps {
  data: OneCallData;
}

export const Result: React.FC<ResultProps> = ({ data }) => {
  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
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
        </VStack>
      ) : (
        <Flex>
          <Box w="50%" height="420px">
            <MapWithNoSSR position={[data.lat, data.lon]} />
          </Box>
          <Box w="50%" ml={4}>
            <CurrentWeather data={data} />
          </Box>
        </Flex>
      )}
    </Box>
  );
};
