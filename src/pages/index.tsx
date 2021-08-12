import { Box, Button, HStack, Image, VStack } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { Header } from "../components/Header";
import { Wrapper } from "../components/Wrapper";
import { useWindowDimensions } from "../hooks/useWindowDimension";

const Index = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();

  return (
    <Wrapper variant="regular">
      <Header />
      {width <= 768 ? (
        <VStack mb={2}>
          <Button
            w="100%"
            shadow="md"
            colorScheme="blue"
            onClick={() => router.push("/city")}
          >
            by city name
          </Button>
          <Button
            w="100%"
            shadow="md"
            colorScheme="blue"
            onClick={() => router.push("/geographic")}
          >
            by geograpic coordinate
          </Button>
          <Button w="100%" shadow="md" onClick={() => router.push("/about")}>
            about
          </Button>
        </VStack>
      ) : (
        <HStack mb={6} spacing={10}>
          <Button
            shadow="md"
            colorScheme="blue"
            onClick={() => router.push("/city")}
          >
            by city name
          </Button>
          <Button
            shadow="md"
            colorScheme="blue"
            onClick={() => router.push("/geographic")}
          >
            by geograpic coordinate
          </Button>
          <Button shadow="md" onClick={() => router.push("/about")}>
            about
          </Button>
        </HStack>
      )}

      <Box w="100%">
        <Image
          src="https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Segun Adebayo"
        />
      </Box>
    </Wrapper>
  );
};

export default Index;
