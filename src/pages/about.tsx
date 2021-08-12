import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Box, Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { Header } from "../components/Header";
import { Wrapper } from "../components/Wrapper";
import { SiGithub } from "react-icons/si";
import NextLink from "next/link";

interface aboutProps {}

const about: React.FC<aboutProps> = ({}) => {
  const router = useRouter();

  return (
    <Wrapper variant="small">
      <Header />
      <Heading size="md">About</Heading>
      <Box>
        <NextLink href="https://openweathermap.org/api">
          <Button mt={2} shadow="md" colorScheme="orange">
            Open Weather
          </Button>
        </NextLink>
        <NextLink href="https://github.com/jingxian01/weather-app">
          <Button
            ml={4}
            mt={2}
            shadow="md"
            bg="black"
            color="white"
            leftIcon={<SiGithub />}
            _hover={{ bg: "gray" }}
          >
            GitHub
          </Button>
        </NextLink>
      </Box>
      <Button
        shadow="md"
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

export default about;
