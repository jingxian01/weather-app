import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { DataType } from "../types";
import { Header } from "./Header";
import { Wrapper } from "./Wrapper";
import { ArrowLeftIcon } from "@chakra-ui/icons";

interface ResultProps {
  data: DataType;
}

export const Result: React.FC<ResultProps> = ({ data }) => {
  const router = useRouter();

  return (
    <Wrapper variant="regular">
      <Header />
      {data.cod !== "404" ? (
        <Box>
          <div>Name: {data.name}</div>
          <div>Temperature: {data.main.temp}</div>
          <div>Minimum temperature: {data.main.temp_min}</div>
          <div>Maximum temperature: {data.main.temp_max}</div>
          <div>Feels like: {data.main.feels_like}</div>
          <div>Humidity: {data.main.humidity}</div>
          <div>Pressure: {data.main.pressure}</div>
          <div>lat: {data.coord.lat}</div>
          <div>lon: {data.coord.lon}</div>
        </Box>
      ) : (
        <div>{data.message}</div>
      )}
      <Button
        leftIcon={<ArrowLeftIcon boxSize="0.8em" />}
        mt={10}
        onClick={() => {
          router.back();
        }}
      >
        back
      </Button>
    </Wrapper>
  );
};
