import { Table, TableCaption, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { OneCallData } from "../../types";
import { Row } from "./Row";

interface ForecastWeatherProps {
  data: OneCallData;
  isMobile: boolean;
}

export const ForecastWeather: React.FC<ForecastWeatherProps> = ({
  data,
  isMobile,
}) => {
  return (
    <>
      {isMobile ? (
        <Table variant="simple" mt={4} size="sm">
          <TableCaption>Daily forecast</TableCaption>
          <Thead>
            <Tr>
              <Th fontSize="xs">Day</Th>
              <Th fontSize="xs">Temp(max) ℉/°C</Th>
              <Th fontSize="xs">Temp(min) ℉/°C</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.daily.map((d) => {
              return <Row key={d.dt} daily={d} isMobile={true} />;
            })}
          </Tbody>
        </Table>
      ) : (
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
              return <Row key={d.dt} daily={d} isMobile={false} />;
            })}
          </Tbody>
        </Table>
      )}
    </>
  );
};
