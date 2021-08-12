import {
  HStack,
  Box,
  Stat,
  StatNumber,
  StatHelpText,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { OneCallData } from "../../types";
import { unixToTime, unixToDay, unixToDate } from "../../utils/date";
import { fahToCel } from "../../utils/temp";

interface currentWeatherProps {
  data: OneCallData;
}

export const CurrentWeather: React.FC<currentWeatherProps> = ({ data }) => {
  return (
    <>
      <HStack>
        <Box key={data.current.weather[0].id}>
          <Box>
            <Image
              src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
              alt="Weather icon"
            />
          </Box>
          <Box fontWeight="bold" fontSize="lg">
            {data.current.weather[0].main}
          </Box>
          <Box fontStyle="italic" fontSize="sm">
            {data.current.weather[0].description}
          </Box>
        </Box>
      </HStack>
      <Box>
        <Stat mt={2}>
          <StatNumber>
            {data.current.temp} ℉ / {fahToCel(data.current.temp)} °C
          </StatNumber>
          <StatHelpText fontStyle="italic">current temperature</StatHelpText>
        </Stat>
        <Stat mt={2}>
          <StatNumber>{unixToTime(data.current.dt)}</StatNumber>
          <HStack>
            <StatHelpText fontStyle="italic">
              {unixToDay(data.current.dt)}, {unixToDate(data.current.dt)}
            </StatHelpText>
          </HStack>
        </Stat>
        <HStack>
          <Stat>
            <StatNumber fontSize="md">{data.current.clouds}%</StatNumber>
            <StatHelpText fontStyle="italic">cloudiness</StatHelpText>
          </Stat>
          <Stat>
            <StatNumber fontSize="md">{data.current.humidity}%</StatNumber>
            <StatHelpText fontStyle="italic">humidity</StatHelpText>
          </Stat>
          <Stat>
            <StatNumber fontSize="sm">{data.current.pressure} hPa</StatNumber>
            <StatHelpText fontStyle="italic">atmospheric pressure</StatHelpText>
          </Stat>
        </HStack>
        <HStack>
          <Stat>
            <StatNumber fontSize="md">
              {unixToTime(data.current.sunrise)}
            </StatNumber>
            <StatHelpText fontStyle="italic">sunrise</StatHelpText>
          </Stat>
          <Stat>
            <StatNumber fontSize="md">
              {unixToTime(data.current.sunset)}
            </StatNumber>
            <StatHelpText fontStyle="italic">sunset</StatHelpText>
          </Stat>
          <Stat>
            <StatNumber></StatNumber>
            <StatHelpText>time based on your browser</StatHelpText>
          </Stat>
        </HStack>
      </Box>
    </>
  );
};
