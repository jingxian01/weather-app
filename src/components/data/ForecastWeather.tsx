import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  Image,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { OneCallData } from "../../types";
import { unixToTableDate } from "../../utils/date";
import { fahToCel } from "../../utils/temp";

interface ForecastWeatherProps {
  data: OneCallData;
}

export const ForecastWeather: React.FC<ForecastWeatherProps> = ({ data }) => {
  return (
    <Table variant="simple" mt={4} size="sm">
      <TableCaption>Daily forecast</TableCaption>
      <Thead>
        <Tr>
          <Th>Day</Th>
          <Th>Temp(max) ℉/°C</Th>
          <Th>Temp(min) ℉/°C</Th>
          <Th>Weather</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.daily.map((d) => {
          return (
            <Tr key={d.dt}>
              <Td>{unixToTableDate(d.dt)}</Td>
              <Td>
                {d.temp.max} / {fahToCel(d.temp.max)}
              </Td>
              <Td>
                {d.temp.min} / {fahToCel(d.temp.min)}
              </Td>
              <Td>
                {d.weather[0].main}, {d.weather[0].description}
              </Td>
              <Td>
                <IconButton
                  size="xs"
                  aria-label="Search database"
                  icon={<HamburgerIcon />}
                />
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
