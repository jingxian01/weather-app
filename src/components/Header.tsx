import { Heading, Text } from "@chakra-ui/react";
import React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <>
      <Heading>Weather</Heading>
      <Text fontSize="md" mb={8}>
        find the current weather of your city.
      </Text>
    </>
  );
};
