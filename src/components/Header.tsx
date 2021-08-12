import { Heading, Text } from "@chakra-ui/react";
import React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <>
      <Heading>Weather App</Heading>
      <Text fontSize="md">find the weather of your city.</Text>
      <Text fontSize="sm" mb={8} fontStyle="italic" color="gray.500">
        available for current and forecast
      </Text>
    </>
  );
};
